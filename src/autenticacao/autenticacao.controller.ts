import { Controller, Post, Body } from '@nestjs/common';
import { AutenticacaoService } from './autenticacao.service';

@Controller('autenticacao')
export class AutenticacaoController {
  constructor(private readonly autenticacaoService: AutenticacaoService) {}

  @Post('login')
  login(@Body() usuario: { username: string; senha: string }) {
    return this.autenticacaoService.login(usuario);
  }
}
