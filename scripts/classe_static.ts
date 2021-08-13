import { BancoDeDados } from "./classes/BancoDeDados";

// Como é static, acesso de forma direta, nem ter a necessidade de instanciar algo, porque para todas as instâncias, os valores static são os mesmos
const conexaoBanco = BancoDeDados.factory({
    tipoBanco: BancoDeDados.TIPO_MYSQL,
    senha: "root",
    usuario: "root",
    ip: BancoDeDados.LOCAL
});

console.log(conexaoBanco);