import { Schema, Document } from 'mongoose';
export declare const UsuarioSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    username: string;
    senha: string;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    username: string;
    senha: string;
}>> & import("mongoose").FlatRecord<{
    username: string;
    senha: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export interface Usuario extends Document {
    username: string;
    senha: string;
}
