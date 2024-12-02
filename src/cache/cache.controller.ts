import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('cache')
export class CacheController {
  @Get()
  @UseInterceptors(CacheInterceptor)
  buscarComCache() {
    return { mensagem: 'Essa resposta está em cache!' };
  }
}
