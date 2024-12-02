import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Produto } from './produtos.schema';

@Injectable()
export class ProdutosService {
  constructor(@InjectModel('Produto') private readonly produtoModel: Model<Produto>) {}

  async criar(produto: { nome: string; preco: number; quantidade: number }) {
    const novoProduto = new this.produtoModel(produto);
    return novoProduto.save();
  }

  async buscarTodos() {
    return this.produtoModel.find().exec();
  }

  async buscarPorNome(nome: string) {
    return this.produtoModel.findOne({ nome }).exec();
  }

  async atualizar(nome: string, atualizarProdutoDto: any) {
    return this.produtoModel.findOneAndUpdate({ nome }, atualizarProdutoDto, { new: true }).exec();
  }

  async remover(nome: string) {
    return this.produtoModel.findOneAndDelete({ nome }).exec();
  }
}
