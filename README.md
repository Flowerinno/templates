### This is a full-stack application built with a client-server architecture.

### Features
- [x] React /TypeScript
- [x] Vite
- [x] React Router
- [x] SASS/SCSS
- [x] Redux Toolkit / React Query
- [x] TRPC
- [x] Postgresql / Docker / Prisma ORM
- [x] Node.js / Express
- [x] JWT / Bcrypt
- [x] Zod


## Client

`The client directory contains the front-end part of the application. It's built with React and TypeScript.`

- src/: Contains the source code of the application.
- App.tsx: The main component of the application.
- api/: Contains the API calls.
- assets/: Contains static files like images.
- components/: Contains reusable React components.
- global/: Contains global styles and variables.
- hooks/: Contains custom React hooks.
- main.tsx: The entry point of the application.
- pages/: Contains the page components.
- routes/: Contains the routing logic.
- sass/: Contains SASS stylesheets.
- store/: Contains the state management logic.
- styles/: Contains CSS stylesheets.
- utils/: Contains utility functions.
- public/: Contains public files like index.html.
- vite-env.d.ts: Contains type definitions for Vite environment variables.
- vite.config.ts: Contains the Vite configuration.

 ## Server
`The server directory contains the back-end part of the application. It's built with Node.js, Express, and TypeScript.`

- src/: Contains the source code of the server.
- routes/: Contains the routing logic.
- server.ts: The entry point of the server.
- services/: Contains the business logic.
- trpc/: Contains the tRPC configuration.
- utils/: Contains utility functions.
- prisma/: Contains the Prisma configuration.

## Setup
`To set up the project, follow these steps:`

1. Clone the repository.
2. Install the dependencies in both the client and server directories: `npm install`
3. Run docker container with postgresql: `docker-compose up -d`
4. Run `npx prisma migrate dev --name init`
5. Start the server: `npm run dev`
6. Start the client: `npm run dev`
