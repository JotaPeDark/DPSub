import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { UsuarioSchema } from './usuarios.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Usuario', schema: UsuarioSchema }])],
  providers: [UsuariosService],
  controllers: [UsuariosController],
})
export class UsuariosModule {}
