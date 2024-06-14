import { Injectable, OnModuleInit } from '@nestjs/common';
import { MySql2Database, drizzle } from 'drizzle-orm/mysql2';
import mysql, {ConnectionOptions} from 'mysql2/promise'
import * as schema from '../../db/schema.ts'


@Injectable()
export class DrizzleService implements OnModuleInit {
    private client: ConnectionOptions
    public db: MySql2Database

    constructor() {
        this.client = {
            host: 'localhost',
            user: 'root',
            database: 'nest',
            password: 'root',
        }
    }

    async onModuleInit() {
        const connection = await mysql.createConnection(this.client)
        this.db = drizzle(connection, {schema, mode: 'default'}) as unknown as MySql2Database
        console.log('Database connected successfully!')
    }
}
