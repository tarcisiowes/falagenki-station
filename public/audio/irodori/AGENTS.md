# Irodori Audio Asset Instructions

This directory serves Irodori MP3 files to the app.

## Naming

- Keep public filenames simple and URL-safe: `<lesson>-<track>_<kind>.mp3`.
- Source files may include prefixes such as `X_[...]`, `Y_[...]`, or `ZZ_[...]`; strip those wrappers when copying into public assets.
- Group tracks by level directory, for example `starter`, `elementary1`, `elementary2`, or `pre-intermediate`.

## Data Mapping

- Every copied audio file that should appear in the app needs a matching entry in `src/data/*-audio.ts`.
- Use description labels consistent with existing modules: vocabulary, listening comprehension, dialog, focus on form, or speaking practice.
- Keep audio IDs stable and aligned with the visible track code.
