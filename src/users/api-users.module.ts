import { Module } from '@nestjs/common';
import { ApiUsersController } from './api-users.controller';
import { ApiUsersServices } from './api-users.service';

@Module({
  imports: [],
  controllers: [ApiUsersController],
  providers: [ApiUsersServices],
})
export class ApiUsersModule {}
