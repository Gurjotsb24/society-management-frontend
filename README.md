# Harmony Heights Society Portal

A frontend-only React + TypeScript + Tailwind-ready Vite prototype. It uses in-memory mock data and simulated API latency—there is no database, authentication server, payment gateway, or external API.

## Run locally

```bash
npm install
npm run dev
```

Use the **Preview as** switcher to inspect Resident, Staff, and Admin dashboard variants. Complaints can be created and staff tasks can be resolved; both update local UI state immediately.

## Structure

- `src/components` — reusable layout and UI primitives
- `src/data` — mock data separate from view code
- `src/services` — replaceable asynchronous mock API boundary
- `src/types` — shared application types
- `src/App.tsx` — role-aware page composition and demo interactions
