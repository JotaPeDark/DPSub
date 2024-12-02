"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UsuarioSchema = new mongoose_1.Schema({
    username: { type: String, unique: true, required: true },
    senha: { type: String, required: true },
});
//# sourceMappingURL=usuarios.schema.js.map