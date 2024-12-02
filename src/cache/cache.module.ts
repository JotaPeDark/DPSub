import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';  // Importando o CacheModule correto
import { ProdutosModule } from '../produtos/produtos.module';  // Exemplo de módulo
import { AutenticacaoModule } from '../autenticacao/autenticacao.module';  // Exemplo de módulo

@Module({
  imports: [
    CacheModule.register({
      ttl: 5,
      max: 100,
    }),
    ProdutosModule,
    AutenticacaoModule,
  ],
})
export class AppModule {}
