
## Environment Configuration

### Database

Set your database connection URL:

```env
DATABASE_URL=postgresql://dbUser:dbPassword@localhost:5432/dbName?schema=public
```

### OAuth

Set your authentication secret:

```env
AUTH_SECRET="YourRandomString"
```

Set up Google OAuth credentials. You can create your own by visiting:

👉 [https://console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)

```env
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
```

---

## Getting Started

### 1. Create a PostgreSQL Database

Make sure you have a PostgreSQL database created and ready to use.

### 2. Configure Environment Variables

Update your `.env` file with the correct database URL and OAuth credentials.

Make sure to set your Google OAuth callback URL to:

```
http://localhost:9999/api/auth/providers
```

### 3. Run Database Migration

Push your database schema using one of the following commands:

```bash
npm run db:push
# or
yarn db:push
# or
pnpm db:push
# or
bun db:push
```

### 4. Start the Development Server

Run the development server using your preferred package manager:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```