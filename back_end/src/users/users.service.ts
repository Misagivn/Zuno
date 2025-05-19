/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UUID } from 'crypto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private prisma: DatabaseService) {}

  async getAllUsers() {
    const users = await this.prisma.users.findMany();
    if (!users) {
      throw new Error('No users found');
    }
    return users;
  }

  async getUserById(userId: UUID) {
    const user = await this.prisma.users.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return {
        status: 'error',
        statusCode: 404,
        message: 'User not found',
        error: 'No user found with this ID',
      };
    }
    return {
      status: 'success',
      statusCode: 200,
      message: 'User found successfully',
      data: user,
    };
  }

  async createUser(data: Prisma.UsersCreateInput) {
    const existingUser = await this.prisma.users.findFirst({
      where: {
        OR: [{ email: data.email }, { userName: data.userName }],
      },
    });
    if (existingUser) {
      return {
        status: 'error',
        statusCode: 500,
        message: 'User already exists',
        error: 'User with this email or username already exists',
      };
    }
    const user = await this.prisma.users.create({
      data,
    });
    if (!user) {
      return {
        status: 'error',
        statusCode: 500,
        message: 'User creation failed',
        error: 'Failed to create user',
      };
    }
    return {
      status: 'success',
      statusCode: 201,
      message: 'User created successfully',
      data: user,
    };
  }

  async loginUser(data) {
    const user = await this.prisma.users.findFirst({
      where: {
        email: data.email,
        password: data.password,
      },
    });
    if (!user) {
      return {
        status: 'error',
        statusCode: 401,
        message: 'Login failed',
        error: 'Invalid email or password',
      };
    }
    return {
      status: 'success',
      statusCode: 200,
      message: 'Login successful',
      data: user,
    };
  }
}
