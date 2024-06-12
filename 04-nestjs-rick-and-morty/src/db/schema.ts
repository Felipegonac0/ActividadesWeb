import {
  pgTable,
  serial,
  integer,
  timestamp,
  varchar,
  text,
} from 'drizzle-orm/pg-core'

export const user = pgTable('user', {
  id: serial('id').primaryKey().notNull(),
  name: varchar('name', { length: 64 }),
  email: varchar('email', { length: 64 }),
  password: text('password'),
})

export const favorites = pgTable('favorites', {
  id: serial('id').primaryKey().notNull(),
  userId: integer('user_id')
    .references(() => user.id, { onDelete: 'cascade' })
    .notNull(),
  characterId: integer('characterId').notNull(),
  created: timestamp('created').defaultNow().notNull(),
})

export type FavoritesSelect = typeof favorites.$inferSelect
export type FavoritesInsert = typeof favorites.$inferInsert
