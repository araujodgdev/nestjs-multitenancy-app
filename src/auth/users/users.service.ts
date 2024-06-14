import { Injectable } from '@nestjs/common';
import { DrizzleService } from 'src/drizzle/drizzle.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { users } from 'db/schema.ts';

@Injectable()
export class UsersService {
    constructor(private readonly drizzleService: DrizzleService) {}

    async createUser(userData: CreateUserDto) {
        await this.drizzleService.db.insert(users).values(userData)
    }
}
