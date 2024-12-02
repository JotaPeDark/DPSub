import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AutenticacaoService {
  constructor(private jwtService: JwtService) {}

  login(usuario: any) {
    const payload = { username: usuario.username, sub: usuario.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
