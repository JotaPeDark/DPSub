import { Schema, Document } from 'mongoose';
export declare const ProdutoSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    nome: string;
    preco: number;
    quantidade: number;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    nome: string;
    preco: number;
    quantidade: number;
}>> & import("mongoose").FlatRecord<{
    nome: string;
    preco: number;
    quantidade: number;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export interface Produto extends Document {
    nome: string;
    preco: number;
    quantidade: number;
}
