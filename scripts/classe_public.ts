// PUBLIC É O MODIFICADOR DE ACESSO DEFAULT DO TS, OU SEJA, CASO NÃO DEFINA, POR TRÁS SERÁ PUBLIC

class Veiculo {
    public cor: string;

    constructor(cor: string) {
        this.cor = cor;
    }

    public tentarAbrirPorta(): boolean {
        return false;
    }
}

const carro = new Veiculo("Vermelho");

console.log(carro.cor); // Posso ver

carro.cor = "Preto"; // Posso alterar o valor

console.log(carro.cor);

console.log(carro.tentarAbrirPorta()); // Posso acessar os métodos também