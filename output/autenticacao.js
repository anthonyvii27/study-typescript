var Autenticacao;
(function (Autenticacao) {
    var LoginRegistro = /** @class */ (function () {
        function LoginRegistro() {
        }
        LoginRegistro.prototype.login = function (usuario) {
            return usuario;
        };
        LoginRegistro.prototype.registro = function (novoUsuario) {
            return novoUsuario;
        };
        return LoginRegistro;
    }());
    Autenticacao.LoginRegistro = LoginRegistro;
    var Recuperacao = /** @class */ (function () {
        function Recuperacao() {
        }
        Recuperacao.prototype.recuperarSenha = function () {
            return "Enviando e-mail de recuperação";
        };
        return Recuperacao;
    }());
    Autenticacao.Recuperacao = Recuperacao;
})(Autenticacao || (Autenticacao = {}));
///<reference path="./autenticacao/index.ts" />
var novoRegistro = new Autenticacao.LoginRegistro();
var resultadoRegistro = novoRegistro.registro({
    nome: "Anthony",
    email: "anthony@teste.com",
    senha: "12346"
});
console.log(resultadoRegistro);
