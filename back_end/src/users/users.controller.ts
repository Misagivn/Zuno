/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dtos/createUser.dto';
import { LoginFormDto } from '../dtos/loginForm.dto';
import { v4 as uuidv4 } from 'uuid';
import { UUID } from 'crypto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get('login')
  async loginUser(@Body() loginFormDto: LoginFormDto) {
    const result = await this.usersService.loginUser(loginFormDto);
    return result;
  }

  @Get(':id')
  getUserById(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.usersService.getUserById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createUser(@Body() createUserDto: CreateUserDto) {
    const user = {
      id: uuidv4(),
      ...createUserDto,
    };
    const result = await this.usersService.createUser(user);
    return result;
  }
}
