import { Get, Module } from '@nestjs/common';
import { HealthController } from './health.controller';
@Get()
@Module({
  controllers: [HealthController]
})
export class HealthModule {}
