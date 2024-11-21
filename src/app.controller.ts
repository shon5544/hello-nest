import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthCheckResponse } from './user.response';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health-check')
  @HttpCode(HttpStatus.OK)
  checkHealth(): HealthCheckResponse {
    return new HealthCheckResponse();
  }
}
