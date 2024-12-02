import { Model } from 'mongoose';
import { Usuario } from './usuarios.schema';
export declare class UsuariosService {
    private readonly usuarioModel;
    constructor(usuarioModel: Model<Usuario>);
    criar(usuario: {
        username: string;
        senha: string;
    }): Promise<import("mongoose").Document<unknown, {}, Usuario> & Usuario & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    buscarTodos(): Promise<(import("mongoose").Document<unknown, {}, Usuario> & Usuario & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    buscarPorUsername(username: string): Promise<import("mongoose").Document<unknown, {}, Usuario> & Usuario & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    atualizar(username: string, atualizarUsuarioDto: any): Promise<import("mongoose").Document<unknown, {}, Usuario> & Usuario & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remover(username: string): Promise<import("mongoose").Document<unknown, {}, Usuario> & Usuario & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
