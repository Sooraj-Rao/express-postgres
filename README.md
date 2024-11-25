DEPLOY TO VERCEL CLI
    npx vercel link
    vercel env add DATABASE_URL
    production
    npx vercel

PUSH TO EXISTING PROJECT 
    npx vercel --prod

PRISMA
npx prisma format        # Format the schema for readability
npx prisma generate      # Generate the Prisma Client
npx prisma migrate dev   # Apply the schema to your PostgreSQL database

AFTER CHANGING THE DB USE -> npx prisma migrate deploy

PRISMA COMMANDS
findMany          Find all
findUnique        find one
include           used to populate
create            ..
connect            connect to the foregin key
