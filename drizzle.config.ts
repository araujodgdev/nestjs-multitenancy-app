import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './db/schema.ts',
  out: './drizzle',
  dialect: 'mysql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nest',
  },
  
});
