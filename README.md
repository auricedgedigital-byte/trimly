# Trimly OS

Trimly is a barbershop management SaaS platform.

## Features
- **Landing Page**: Professional hero section, features showcase, and pricing tiers.
- **Dashboard**:
  - Appointments/Calendar
  - Client Management (CRM)
  - Reactivation Campaigns
  - Lead Magnets
  - Unified Inbox
  - Analytics

## Tech Stack
- Next.js 15 (App Router)
- Tailwind CSS 4
- Framer Motion
- Radix UI
- Supabase

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Set up Supabase:
   - Create a new project on [Supabase](https://supabase.com).
   - Get your project URL and Anon Key.
   - Add them to `.env.local`.
4. Run the development server: `npm run dev`.

## Deployment

Deploy to Vercel and set the environment variables. For the custom subdomain `trimly.auricedge.site`, configure the DNS settings in your domain provider to point to Vercel.
