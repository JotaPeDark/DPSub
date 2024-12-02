"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacaoModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const autenticacao_service_1 = require("./autenticacao.service");
const autenticacao_controller_1 = require("./autenticacao.controller");
let AutenticacaoModule = class AutenticacaoModule {
};
exports.AutenticacaoModule = AutenticacaoModule;
exports.AutenticacaoModule = AutenticacaoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: 'batata',
                signOptions: { expiresIn: '1h' },
            }),
        ],
        controllers: [autenticacao_controller_1.AutenticacaoController],
        providers: [autenticacao_service_1.AutenticacaoService],
    })
], AutenticacaoModule);
//# sourceMappingURL=autenticacao.module.js.map