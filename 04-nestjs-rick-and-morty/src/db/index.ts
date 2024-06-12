// src/db/index.ts
import { Pool } from 'pg'
import { dbConfig } from '@/db/dbConfig'
import { sql } from '@vercel/postgres'
import { isProd } from '@/const/config'
import { drizzle as drizzleNode } from 'drizzle-orm/node-postgres'
import { drizzle as drizzleVercel } from 'drizzle-orm/vercel-postgres'

export const client = new Pool({
  host: dbConfig.host,
  port: dbConfig.port,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
})
export const db = isProd ? drizzleVercel(sql) : drizzleNode(client)
