import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
import { EstoqueModule } from './estoque/estoque.module';

@Module({
  imports: [EstoqueModule],
  controllers: [],
  providers: [],
})

export class AppModule { }

//Vai conter tudo o que eu vou precisar para que o código funcione

//É basicamente um agrupamento de todos os arquivos utilizados no código
