# vei-sandbox-feature-flow

A tiny, professional practice repo to mirror a real team workflow (issue → branch → PR → CI → release), based on a simple "Appointments" feature.

## Tech
- **Server:** Node + Express (in-memory data), Jest + Supertest tests
- **Client:** React + Vite (proxy to server during dev)
- **CI:** GitHub Actions (lint, build, tests)
- **Quality:** ESLint, Prettier, Husky pre-commit hook
- **Docs:** PR & issue templates, LEARNINGS.md

## Quick start
Open two terminals (one for `server`, one for `client`).

```bash
# 1) Server
cd server
npm install
npm run dev

# 2) Client
cd ../client
npm install
npm run dev
```

Visit the client dev server URL (usually printed by Vite, e.g. http://localhost:5173).

The client proxy forwards `/api/*` calls to the server on port **3000**.

## API
- `GET /api/appointments` → `[]`
- `POST /api/appointments { title, time }` → `{ id, title, time }`

## Git workflow (suggested)
1. Create an issue (e.g., "Wire form UX").
2. Create a branch: `feature/wire-form-ux`.
3. Commit using Conventional Commits (e.g., `feat(client): submit form`).
4. Open a PR to `main` (template included).
5. Ensure CI checks pass, then merge.
6. Tag a release (e.g., `v0.1.0`).

## Husky hook
After `npm install` inside `server` and `client`, run at the repo root to ensure hooks are active:

```bash
npx husky install
```

## Optional: Docker Compose
A minimal `docker-compose.yml` is included to run both services:

```bash
docker compose up --build
```

## Learnings
Add personal notes in `docs/LEARNINGS.md` as you go.