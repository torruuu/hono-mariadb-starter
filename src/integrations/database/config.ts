import { PrismaClient } from '@/core/db/generated/prisma/client.js'
import env from '@/env.js'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

const adapter = new PrismaMariaDb({
  host: env.DATABASE_HOST,
  user: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  connectionLimit: 5,
})
const prisma = new PrismaClient({ adapter })

export { prisma }
