import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiUsersModule } from './users/api-users.module';

@Module({
  imports: [ApiUsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
