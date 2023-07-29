import { Controller, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'CSTIAN Backend!';
  }
}





// npm run start:dev