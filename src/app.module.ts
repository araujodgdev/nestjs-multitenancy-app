import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './auth/auth.module.js';
import { DrizzleModule } from './drizzle/drizzle.module.js';

@Module({
  imports: [AuthModule, DrizzleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
