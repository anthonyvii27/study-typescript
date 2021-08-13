console.log("Hello World");

const nome = "João";

console.log(`Olá, ${nome}`)

class Produto {
    nome: string;
    valor: number;

    constructor(produtoNome: string, produtoValor: number) {
        this.nome = produtoNome;
        this.valor = produtoValor;
    }
}