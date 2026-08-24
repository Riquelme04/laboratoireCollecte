import { Controller, Get } from '@nestjs/common';

@Controller('health')
@Get()
export class HealthController {}
