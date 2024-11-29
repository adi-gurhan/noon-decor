Your Currenty working on the API 
"dev": "node --import=tsx --env-file=.env --watch src/index.ts",
Cd Api 
Then Run
Npm run dev

npx drizzle-kit studio
Drizzle Studio is up and running on https://local.drizzle.studio

You can also do it this way as i updated package.json
"db:generate": "drizzle-kit generate",
npm run db:generate
    "db:migrate": "drizzle-kit migrate",
    npm run db:migrate
    "db: studio": "drizzle-kit studio"
    npm run db:studio
npm run db:generate
