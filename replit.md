# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains Prem Mohan's personal portfolio website and a shared API server.

## Artifacts

- **portfolio** (`artifacts/portfolio/`) — 5-page personal portfolio site for Prem Mohan (AI/ML developer). Dark navy theme (#0a0a1a) with electric blue (#00D4FF) and purple (#7B2FFE) accents. Pages: Home, Projects, About, Skills, Contact.
- **api-server** (`artifacts/api-server/`) — Shared Express API server

## Portfolio Pages

- `/` — Home (hero, featured projects, CTA buttons)
- `/projects` — All 8 projects grid
- `/about` — Bio + journey timeline
- `/skills` — Skill categories with animated progress bars
- `/contact` — Contact form (formsubmit.co) + social links

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite, Tailwind CSS, framer-motion, wouter routing
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
