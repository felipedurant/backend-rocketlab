import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

//Contructor para modificar banco de dados
//Variáveis do tipo prisma service como variáveis para modificar 
