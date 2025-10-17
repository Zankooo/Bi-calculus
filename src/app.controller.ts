import { Controller, Get, Res } from '@nestjs/common';


@Controller()
export class AppController {
  @Get('hello')
  getHello() {
    return { message: 'Hello World!!!' };
  }

  
}
