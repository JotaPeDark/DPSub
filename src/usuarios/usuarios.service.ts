import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from './usuarios.schema';

@Injectable()
export class UsuariosService {
  constructor(@InjectModel('Usuario') private readonly usuarioModel: Model<Usuario>) {}

  async criar(usuario: { username: string; senha: string }) {
    const novoUsuario = new this.usuarioModel(usuario);
    return novoUsuario.save();
  }

  async buscarTodos() {
    return this.usuarioModel.find().exec();
  }

  async buscarPorUsername(username: string) {
    return this.usuarioModel.findOne({ username }).exec();
  }

  async atualizar(username: string, atualizarUsuarioDto: any) {
    return this.usuarioModel.findOneAndUpdate({ username }, atualizarUsuarioDto, { new: true }).exec();
  }

  async remover(username: string) {
    return this.usuarioModel.findOneAndDelete({ username }).exec();
  }
}
