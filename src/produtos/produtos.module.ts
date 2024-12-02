import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { ProdutoSchema } from './produtos.schema';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Produto', schema: ProdutoSchema }]),
  CacheModule.register({
    ttl: 5,  // O cache expira após 5 segundos
    max: 100, // Máximo de 100 itens no cache
  })],
  providers: [ProdutosService],
  controllers: [ProdutosController],
})
export class ProdutosModule { }
