import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  @Get('hello')
  getHello() {
    return { message: 'Hello World' };
  }

  @Get('page')
  getPage(@Res() res: Response) {
    const filePath = join(__dirname, '..', 'public', 'index.html');
    return res.sendFile(filePath);
  }
}
