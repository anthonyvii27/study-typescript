namespace Autenticacao {
    interface IUsuario {
        email: string;
        senha: string;
    }

    interface ICadastro {
        nome: string;
        email: string;
        senha: string;
    }

    export class LoginRegistro {
        login(usuario: IUsuario) {
            return usuario;
        }

        registro(novoUsuario: ICadastro) {
            return novoUsuario;
        }
    }

    export class Recuperacao {
        recuperarSenha(): string {
            return "Enviando e-mail de recuperação";
        }
    }
}