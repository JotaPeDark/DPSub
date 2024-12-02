import { ProdutosService } from './produtos.service';
export declare class ProdutosController {
    private readonly produtosService;
    constructor(produtosService: ProdutosService);
    criar(criarProdutoDto: any): Promise<import("mongoose").Document<unknown, {}, import("./produtos.schema").Produto> & import("./produtos.schema").Produto & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    buscarTodos(): Promise<(import("mongoose").Document<unknown, {}, import("./produtos.schema").Produto> & import("./produtos.schema").Produto & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    buscarPorNome(nome: string): Promise<import("mongoose").Document<unknown, {}, import("./produtos.schema").Produto> & import("./produtos.schema").Produto & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    atualizar(nome: string, atualizarProdutoDto: any): Promise<import("mongoose").Document<unknown, {}, import("./produtos.schema").Produto> & import("./produtos.schema").Produto & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remover(nome: string): Promise<import("mongoose").Document<unknown, {}, import("./produtos.schema").Produto> & import("./produtos.schema").Produto & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
