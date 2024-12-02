import { UsuariosService } from './usuarios.service';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    criar(criarUsuarioDto: any): Promise<import("mongoose").Document<unknown, {}, import("./usuarios.schema").Usuario> & import("./usuarios.schema").Usuario & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    buscarTodos(): Promise<(import("mongoose").Document<unknown, {}, import("./usuarios.schema").Usuario> & import("./usuarios.schema").Usuario & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    buscarPorUsername(username: string): Promise<import("mongoose").Document<unknown, {}, import("./usuarios.schema").Usuario> & import("./usuarios.schema").Usuario & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    atualizar(username: string, atualizarUsuarioDto: any): Promise<import("mongoose").Document<unknown, {}, import("./usuarios.schema").Usuario> & import("./usuarios.schema").Usuario & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remover(username: string): Promise<import("mongoose").Document<unknown, {}, import("./usuarios.schema").Usuario> & import("./usuarios.schema").Usuario & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
