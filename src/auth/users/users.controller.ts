import { Body, Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()
    createUser(@Body() userData: CreateUserDto) {
        this.usersService.createUser(userData)
    }

}
