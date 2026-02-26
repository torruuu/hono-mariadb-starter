import { PrismaClient } from '@/core/db/generated/prisma/client.js'
import env from '@/env.js'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

const adapter = new PrismaMariaDb({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  port: env.DB_PORT,
  connectionLimit: 5,
})
const prisma = new PrismaClient({ adapter })

export { prisma }
