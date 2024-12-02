import { AutenticacaoService } from './autenticacao.service';
export declare class AutenticacaoController {
    private readonly autenticacaoService;
    constructor(autenticacaoService: AutenticacaoService);
    login(usuario: {
        username: string;
        senha: string;
    }): {
        access_token: string;
    };
}
