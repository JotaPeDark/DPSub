import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProdutosModule } from './produtos/produtos.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/produtos'),
    UsuariosModule,
    ProdutosModule,
    AutenticacaoModule,
  ],
})
export class AppModule {}
