"""Generate checkpointed machine transcripts for local Genki audio authoring.

The output is supporting editorial data. It must remain marked as machine-generated
and unreviewed in the application until checked against the source material.
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path
from time import perf_counter

from faster_whisper import WhisperModel


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("sources", nargs="+", type=Path)
    parser.add_argument("--output", required=True, type=Path)
    parser.add_argument("--model", default="small")
    parser.add_argument("--device", default="cpu")
    parser.add_argument("--compute-type", default="int8")
    parser.add_argument("--force", action="store_true")
    return parser.parse_args()


def read_checkpoint(path: Path) -> dict[str, object]:
    if not path.exists():
        return {}
    return json.loads(path.read_text(encoding="utf-8"))


def write_checkpoint(path: Path, payload: dict[str, object]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(f"{path.suffix}.tmp")
    temporary.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2, sort_keys=True) + "\n",
        encoding="utf-8",
    )
    temporary.replace(path)


def main() -> None:
    args = parse_args()
    files = sorted(
        {file.resolve() for source in args.sources for file in source.glob("*.mp3")},
        key=lambda file: file.stem,
    )
    if not files:
        raise SystemExit("No MP3 files found in the supplied source directories.")

    transcripts = read_checkpoint(args.output)
    model = WhisperModel(
        args.model,
        device=args.device,
        compute_type=args.compute_type,
    )
    started = perf_counter()

    for index, file in enumerate(files, start=1):
        code = file.stem
        if code in transcripts and not args.force:
            print(f"[{index}/{len(files)}] skip {code}", flush=True)
            continue

        item_started = perf_counter()
        segments, info = model.transcribe(
            str(file),
            beam_size=5,
            vad_filter=True,
            condition_on_previous_text=True,
        )
        rendered = [
            {
                "start": round(segment.start, 2),
                "end": round(segment.end, 2),
                "text": segment.text.strip(),
            }
            for segment in segments
            if segment.text.strip()
        ]
        transcripts[code] = {
            "language": info.language,
            "languageProbability": round(info.language_probability, 4),
            "duration": round(info.duration, 2),
            "segments": rendered,
        }
        write_checkpoint(args.output, transcripts)
        print(
            f"[{index}/{len(files)}] {code}: {len(rendered)} segments "
            f"in {perf_counter() - item_started:.1f}s",
            flush=True,
        )

    print(
        f"Completed {len(files)} files in {perf_counter() - started:.1f}s; "
        f"checkpoint: {args.output}",
        flush=True,
    )


if __name__ == "__main__":
    main()
