# Super Seven Karate Institute — MERN Demo

Premium martial-arts academy website + Express/MongoDB API + JWT admin panel.

## Stack
- React + Vite
- Express + MongoDB/Mongoose
- JWT admin authentication
- REST CRUD for programs, coaches, achievements, champions, branches, events, gallery, testimonials, news, affiliations, enquiries and settings

## Run
1. Copy `server/.env.example` to `server/.env`.
2. Set `MONGO_URI`, `JWT_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`.
3. From root: `npm install` then `npm run dev`.
4. Frontend: http://localhost:5173
5. API: http://localhost:5000/api

## Important content note
This demo uses publicly reported information found during research. Verified/strongly supported details are seeded; uncertain items are explicitly marked as editable or unverified in the admin. Do not publish unverified affiliations, medals, coaches, branches, programs or fees without confirmation from the academy.

## Image note
The gallery supports remote image URLs. The seed includes a publicly reachable LyfSkills image reference found during research plus generic martial-arts image URLs. Confirm usage rights before commercial launch and replace with academy-owned/licensed media where required.

## Admin
Open `/admin`. Use the credentials configured in `.env`. Change the default credentials before deployment.
