import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers(): string {
    return `This action returns all users`;
  }
  @Get(':id')
  getUserById(@Param('id') id: string): string {
    return `This action returns a user with id: ${id}`;
  }
}
