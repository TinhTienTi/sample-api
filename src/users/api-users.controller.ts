import { Controller, Get } from '@nestjs/common';
import { ApiUsersServices } from './api-users.service';

@Controller('/api/users')
export class ApiUsersController {
  constructor(private service: ApiUsersServices) {}

  @Get('')
  async getAllUsers() {
    return this.service.getAllUsers();
  }
}
