import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  @Get('hello')
  getHello() {
    return { message: 'Hello World' };
  }

  
}
