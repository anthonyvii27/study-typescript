"use strict";
var Autenticacao;
(function (Autenticacao) {
    class LoginRegistro {
        login(usuario) {
            return usuario;
        }
        registro(novoUsuario) {
            return novoUsuario;
        }
    }
    Autenticacao.LoginRegistro = LoginRegistro;
    class Recuperacao {
        recuperarSenha() {
            return "Enviando e-mail de recuperação";
        }
    }
    Autenticacao.Recuperacao = Recuperacao;
})(Autenticacao || (Autenticacao = {}));
//# sourceMappingURL=index.js.map