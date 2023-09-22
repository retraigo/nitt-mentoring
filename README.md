# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Prerequisites

### ENV

Create a .env file with the following information:

| Key          | Value                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------- |
| DATABASE_URL | URL to connect to the database. (eg) `postgresql://<user>:<password>@<host>:<port>/<database>?schema=<schema>` |
| JWT_KEY      | A secret string to encrypt the JWT                                                                             |
| BCRYPT_SALT  | A number (I used 10). Do not change this after initial use.                                                    |

```m
// Example
// .env
DATABASE_URL="postgresql://postgres:password@localhost:5432/mentoring?schema=public"
JWT_KEY="<SOME SECRET KEY>"
BCRYPT_SALT=10
```

### ORM
You need to generate Prisma types and make sure that it is up to date with the DB

```bash
npm run prisma-generate

npm run db_push
```

### INITIAL USE
If this is the initial use, you need to create an admin account so that you can create other accounts:

```bash
npm run create-user <username> <password> 3
```

You can create departments here or directly in the DB
```bash
npm run create-dept <dept_id eg. CSE> <full name eg. Computer Science>
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

You can deploy the site using

```bash
node .output/server/index.mjs
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
