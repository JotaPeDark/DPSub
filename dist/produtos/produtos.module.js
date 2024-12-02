"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const produtos_service_1 = require("./produtos.service");
const produtos_controller_1 = require("./produtos.controller");
const produtos_schema_1 = require("./produtos.schema");
const cache_manager_1 = require("@nestjs/cache-manager");
let ProdutosModule = class ProdutosModule {
};
exports.ProdutosModule = ProdutosModule;
exports.ProdutosModule = ProdutosModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Produto', schema: produtos_schema_1.ProdutoSchema }]),
            cache_manager_1.CacheModule.register({
                ttl: 5,
                max: 100,
            })],
        providers: [produtos_service_1.ProdutosService],
        controllers: [produtos_controller_1.ProdutosController],
    })
], ProdutosModule);
//# sourceMappingURL=produtos.module.js.map