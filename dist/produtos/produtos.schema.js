"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProdutoSchema = new mongoose_1.Schema({
    nome: { type: String, unique: true, required: true },
    preco: { type: Number, required: true },
    quantidade: { type: Number, required: true },
});
//# sourceMappingURL=produtos.schema.js.map