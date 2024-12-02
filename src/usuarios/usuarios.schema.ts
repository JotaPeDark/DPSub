import { Schema, Document } from 'mongoose';

export const UsuarioSchema = new Schema({
  username: { type: String, unique: true, required: true },
  senha: { type: String, required: true },
});

export interface Usuario extends Document {
  username: string;
  senha: string;
}
