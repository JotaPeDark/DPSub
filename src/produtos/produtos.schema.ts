import { Schema, Document } from 'mongoose';

export const ProdutoSchema = new Schema({
  nome: { type: String, unique: true, required: true },
  preco: { type: Number, required: true },
  quantidade: { type: Number, required: true },
});

export interface Produto extends Document {
  nome: string;
  preco: number;
  quantidade: number;
}
