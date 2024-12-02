import { Model } from 'mongoose';
import { Produto } from './produtos.schema';
export declare class ProdutosService {
    private readonly produtoModel;
    constructor(produtoModel: Model<Produto>);
    criar(produto: {
        nome: string;
        preco: number;
        quantidade: number;
    }): Promise<import("mongoose").Document<unknown, {}, Produto> & Produto & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    buscarTodos(): Promise<(import("mongoose").Document<unknown, {}, Produto> & Produto & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    buscarPorNome(nome: string): Promise<import("mongoose").Document<unknown, {}, Produto> & Produto & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    atualizar(nome: string, atualizarProdutoDto: any): Promise<import("mongoose").Document<unknown, {}, Produto> & Produto & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remover(nome: string): Promise<import("mongoose").Document<unknown, {}, Produto> & Produto & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
