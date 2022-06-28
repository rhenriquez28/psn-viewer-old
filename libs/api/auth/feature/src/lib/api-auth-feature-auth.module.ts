import { Module } from '@nestjs/common';
import { AuthController } from './api-auth-feature-auth.controller';

@Module({
  controllers: [AuthController],
})
export class AuthModule {}
