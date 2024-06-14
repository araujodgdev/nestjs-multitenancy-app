import { sql } from 'drizzle-orm';
import { mysqlTable, serial, varchar, json, datetime, timestamp } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256}),
  email: varchar('email', { length: 256}),
  password: varchar('password', { length: 256}),
  role: json('role'),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
})