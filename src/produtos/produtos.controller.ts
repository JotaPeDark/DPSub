import { Controller, Get, Post, Put, Delete, Body, Param, UseInterceptors } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('produtos')
@UseInterceptors(CacheInterceptor)
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  criar(@Body() criarProdutoDto: any) {
    return this.produtosService.criar(criarProdutoDto);
  }

  @Get()
  buscarTodos() {
    return this.produtosService.buscarTodos();
  }

  @Get(':nome')
  buscarPorNome(@Param('nome') nome: string) {
    return this.produtosService.buscarPorNome(nome);
  }

  @Put(':nome')
  atualizar(@Param('nome') nome: string, @Body() atualizarProdutoDto: any) {
    return this.produtosService.atualizar(nome, atualizarProdutoDto);
  }

  @Delete(':nome')
  remover(@Param('nome') nome: string) {
    return this.produtosService.remover(nome);
  }
}
