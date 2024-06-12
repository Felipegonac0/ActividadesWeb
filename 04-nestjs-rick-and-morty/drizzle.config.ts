import { defineConfig } from 'drizzle-kit'
import { dbConfig } from '@/db/dbConfig'

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    ssl: false,
  },
})
