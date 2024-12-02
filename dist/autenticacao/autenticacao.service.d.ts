import { JwtService } from '@nestjs/jwt';
export declare class AutenticacaoService {
    private jwtService;
    constructor(jwtService: JwtService);
    login(usuario: any): {
        access_token: string;
    };
}
