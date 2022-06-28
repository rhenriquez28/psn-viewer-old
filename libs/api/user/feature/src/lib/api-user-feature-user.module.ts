import { Module } from '@nestjs/common';
import { UserController } from './api-user-feature-user.controller';

@Module({
  controllers: [UserController],
  providers: [],
  exports: [],
})
export class UserModule {}
