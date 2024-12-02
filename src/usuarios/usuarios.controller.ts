import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  criar(@Body() criarUsuarioDto: any) {
    return this.usuariosService.criar(criarUsuarioDto);
  }

  @Get()
  buscarTodos() {
    return this.usuariosService.buscarTodos();
  }

  @Get(':username')
  buscarPorUsername(@Param('username') username: string) {
    return this.usuariosService.buscarPorUsername(username);
  }

  @Put(':username')
  atualizar(@Param('username') username: string, @Body() atualizarUsuarioDto: any) {
    return this.usuariosService.atualizar(username, atualizarUsuarioDto);
  }

  @Delete(':username')
  remover(@Param('username') username: string) {
    return this.usuariosService.remover(username);
  }
}
