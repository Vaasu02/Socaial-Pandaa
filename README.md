# MERN Social App

A full-stack social media demo built with Next.js 14, Clerk authentication, Express.js, and MongoDB. Users can sign up/sign in, create posts, like, and comment. The app includes responsive, polished auth pages and basic community/tool/settings/user pages.

## Tech Stack
- Frontend: Next.js 14, React 18, Tailwind CSS, Clerk Auth, lucide-react
- Backend: Express.js, Mongoose (MongoDB), CORS, dotenv
- HTTP: axios

## Monorepo Structure
- `MERN-stack-Social-App/` – Next.js frontend
- `MERN-Express-backend/` – Express + MongoDB backend

## Prerequisites
- Node.js 18+
- MongoDB running locally (or a remote MongoDB URI)
- Clerk account with publishable and secret keys

## Backend Setup (Express + MongoDB)
1. Go to the backend folder:
   ```bash
   cd MERN-Express-backend
   ```
2. Create a `.env` file:
   ```env
   MONGODB_URL=mongodb://127.0.0.1:27017/social_app
   ```
   Use your own URI if needed (Atlas, Docker, etc.).
3. Install dependencies and start the server:
   ```bash
   npm install
   npm start
   ```
   The API will run at `http://localhost:8000`.

### API Overview
Base URL: `http://localhost:8000`

- Users
  - `POST /user` – create or upsert user
    ```json
    { "name":"Test User", "email":"test@example.com", "image":"https://..." }
    ```
  - `GET /user/:email` – get user by email
- Posts
  - `GET /post` – list posts (populated: `createdBy`, `likes`, `comments.createdBy`)
  - `POST /post` – create post
    ```json
    { "postText":"Hello", "createdAt":"1690000000000", "createdBy":"<userId>", "imageUrl":"" }
    ```
  - `PUT /post/like/:postId` – like/unlike
    ```json
    { "userId":"<userId>", "isLike":true }
    ```
- Comments
  - `POST /comment` – create comment
  - `DELETE /comment/:commentId` – delete comment

## Frontend Setup (Next.js + Clerk)
1. Go to the frontend folder:
   ```bash
   cd MERN-stack-Social-App
   ```
2. Configure environment variables for Clerk (e.g. in `.env.local`):
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   ```
3. Install dependencies and run the dev server:
   ```bash
   npm install
   npm run dev
   ```
   The app will run at `http://localhost:3000`.

### Auth and Routing
- Public routes are configured in `middleware.ts` as `['/','/home']`.
- Sign-in: `/sign-in` – Custom responsive layout wrapping Clerk `<SignIn />`.
- Sign-up: `/sign-up` – Custom responsive layout wrapping Clerk `<SignUp />`.
- Home: `/home` – Banner (when logged out), post composer and feed (when logged in).
- Community: `/community` – Static, responsive placeholder page.
- Tools: `/tool` – Static, responsive placeholder page with tool cards.
- Settings: `/settings` – Static, responsive placeholder page.
- User: `/user` – Shows your Clerk profile info.

### Data Flow Highlights
- `app/_context/UserDetailContext.js` provides `userDetail` across the app.
- `app/(routes)/layout.js` loads the current user from the backend by email. If not found, it creates the user via `POST /user` and then sets `userDetail`.
- `app/(routes)/home/page.js` waits for `userDetail` before rendering the post composer.
- `app/(routes)/home/_components/WritePost.js` guards against missing `userDetail` and only posts with a valid `createdBy` ID.
- API client is configured in `app/_utils/GlobalApi.js` and points to `http://localhost:8000`.

## Common Scripts
Frontend (from `MERN-stack-Social-App`):
- `npm run dev` – start Next.js dev server
- `npm run build` – build
- `npm start` – start production build
- `npm run lint` – lint

Backend (from `MERN-Express-backend`):
- `npm start` – start Express with nodemon

## Troubleshooting
- Cannot publish post / “Please wait, your profile details are still loading”: ensure the backend is running, MongoDB is connected, and you are signed in. The app auto-creates your user record on first visit.
- 404 on `/community`, `/tool`, `/settings`, `/user`: these pages are included under `app/(routes)/...`; ensure the frontend dev server restarted after pulling changes.
- CORS/network issues: backend enables CORS; confirm it’s running at `http://localhost:8000` to match the frontend `GlobalApi` base URL.
- Clerk not loading: verify `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` are set, and restart the dev server.

## Notes
- To point the frontend at a different API base URL, update `app/_utils/GlobalApi.js`.
- Example local MongoDB URL:
  ```
  mongodb://127.0.0.1:27017/social_app
  ```



