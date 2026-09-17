# Vidyasagar Society Bangladesh — Client Demo

A professional local demo website built with **Next.js App Router + TypeScript + Tailwind CSS**. All demo content is stored in JSON files inside the project under `server/data/`.

## Demo modules

- Public home page
- About the Society
- Ishwar Chandra Vidyasagar knowledge centre
- Activities
- Publications archive
- Events
- Executive committee
- Membership application form
- Media/gallery page
- Contact form
- Protected demo admin dashboard
- Local JSON storage for applications and messages

## Requirements

- Node.js 20+ recommended
- npm or pnpm

## Run locally

```bash
cd vidyasagar-society-demo
cp .env.example .env.local
npm install
npm run dev
```

Or with pnpm:

```bash
corepack enable
pnpm install
pnpm dev
```

Open: `http://localhost:3000`

Admin: `http://localhost:3000/admin/login`

Default demo password: `VSB@Demo2026`

> Change `ADMIN_DEMO_PASSWORD` in `.env.local` before showing the project publicly.

## Local data storage

Editable data is located in:

```text
server/data/
├── site.json
├── vidyasagar.json
├── committee.json
├── activities.json
├── events.json
├── publications.json
├── media.json
├── membership-applications.json
└── contact-messages.json
```

Membership and contact submissions are appended to local JSON files through Next.js route handlers. This is intended for local/client demo use. For production, migrate these records to Supabase/PostgreSQL.

## Content sources

- Ishwar Chandra Vidyasagar biographical information is paraphrased from the English Wikipedia article supplied by the client.
- Society overview/demo statistics use the supplied letterhead and publicly reported organizational information. Verify committee names, address, statistics, photos and event details with the Society before production launch.

## Suggested production upgrade

1. Supabase PostgreSQL
2. Supabase Auth
3. Role-based admin permissions
4. Supabase Storage for publications/gallery
5. Payment gateway for membership fees/donations
6. Bangla/English locale routing
7. Email/SMS notifications
8. Audit logs

# VidyasagarSocietyBangladesh
