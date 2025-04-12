## Getting Started

First, create postgres database.

Update env file and set google callback url to be "http://localhost:9999/api/auth/providers"

Run db migration:

```bash
npm run db:push
# or
yarn db:push
# or
pnpm db:push
# or
bun db:push
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```