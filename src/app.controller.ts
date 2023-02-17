import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }

  @Get('/key123')
  async getHello3(): Promise<string> {
    return this.appService.getHello3();
  }

  @Get('/abc123')
  async getHello2(): Promise<string> {
    return this.appService.getHello2();
  }
}
