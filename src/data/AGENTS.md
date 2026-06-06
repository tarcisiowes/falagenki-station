# Data Content Instructions

Files in this directory define study content as typed TypeScript data.

## Structure

- Irodori levels use one level module, plus one generated-style audio module when audio assets exist.
- Level modules export a `Level` object with `sections` made of one `Section` per lesson.
- Lesson IDs use `lesson-N`. Question IDs and audio IDs must be stable, English-oriented, and prefixed by level, for example `iro-e2-l1-1` or `iro-pi-01-01`.
- Keep imports narrow and use the existing interfaces from `types.ts`.

## Irodori Pattern

- Follow the established `irodori-starter`, `irodori-elementary1`, and `irodori-elementary2` style.
- Use `studyNotes` for Can-do, grammar, vocabulary, kanji, reading, TIPS, and lesson summaries.
- Use `groups` for interactive questions that check meaning, grammar, vocabulary, kanji, reading, and listening comprehension.
- Use `audios` with `attachScripts` when full scripts are implemented. Script line translations are pt-BR, Japanese remains faithful to the source.
- Image paths must point to `/images/irodori/<level>/...`; audio paths must point to `/audio/irodori/<level>/...`.

## Language Rules

- Learner-facing `titlePt`, `summaryPt`, `instructionPt`, `translationPt`, `explanationPt`, `descriptionPt`, and script `pt` must be Brazilian Portuguese.
- Technical metadata and code identifiers stay English.
- Keep Japanese examples and official dialog wording unchanged except for the local furigana markup format.

## Safety

- Do not edit `irodori-elementary2.ts` unless the task is specifically about Elementary 2.
- After changing content, run `npm run build`.
