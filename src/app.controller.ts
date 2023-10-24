import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { FirstDto } from './system/dtos/first.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags("cats")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("test")
  testCall(@Body() data: FirstDto) {
    return true
  }
}
