# Project Instructions

This is a personal Japanese study app built with React, Vite, and TypeScript.

## Language

- Keep project-facing code, filenames, identifiers, comments, and commit messages in English.
- Keep learner-facing study content in Brazilian Portuguese.
- Preserve Japanese source text exactly when it comes from official material. Use the local furigana convention `{kanji|kana}` where surrounding files already use it.

## Content Fidelity

- Irodori content must be implemented from the local source files in `docs/Irodori`.
- Do not paraphrase away learning points. Translate English explanations to pt-BR, keep Japanese examples, lesson order, grammar points, vocabulary, dialogs, and Can-do intent faithful to the source.
- The ongoing work in `src/data/irodori-elementary2.ts` is replacing audio dialog summaries with full dialogs. Do not edit that file for unrelated work.

## Validation

- Run `npm run build` before finishing any app or content change.
- Add tests only when a change introduces behavior or logic worth testing. Pure content additions are validated by TypeScript/build unless schema or loader logic changes.
- If a library, framework, SDK, API, CLI, or cloud-service question comes up, use Context7 current docs before answering or changing code.

## Git

- Check `git status` before staging.
- Never stage unrelated local changes.
- Commit Irodori lesson content one lesson at a time.
