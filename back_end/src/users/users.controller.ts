import { Controller, Get, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('sort') sort: string,
    @Query('filter') filter: string,
  ) {
    return {
      page,
      limit,
      sort,
      filter,
    };
  }
}
