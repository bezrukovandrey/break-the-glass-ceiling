# Break the Glass Ceiling

Official multinational website for an international project uniting five partner countries to empower young women and expand access to employment and education for extra‑EU women. The site features publications, events, and volunteer stories that are managed and updated from a central database.

Link: https://github.com/bezrukovandrey/break-the-glass-ceiling

## Features
- Public-facing pages for project information, partner countries, and volunteer stories
- Publications and events listings driven by the database
- Dynamic content updated regularly via Supabase
- Responsive UI built with Svelte/SvelteKit and Tailwind CSS
- Deployed on Vercel

## Tech stack
- Svelte / SvelteKit
- Tailwind CSS
- Supabase (database + auth)
- Vercel (hosting / CI)

## Quick start (development)
1. Clone the repo:
   git clone https://github.com/bezrukovandrey/break-the-glass-ceiling.git
2. Install dependencies:
   npm install
3. Create a local env file `.env.local` with the required variables (example below).
4. Run the dev server:
   npm run dev

Build for production:
npm run build
npm run preview

## Database & content
Publications, events, and volunteer stories are stored in Supabase. Use the Supabase dashboard or provided server/admin scripts to manage records. Content displayed on the site is retrieved from the database, so updates appear on the site once published.

## Deployment
- Connect the repository to Vercel.
- Set the same environment variables in the Vercel project settings.
- Vercel will run the build command (`npm run build`) and deploy the site automatically on push.

