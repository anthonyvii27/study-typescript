// Protected: Só quem pode ver é o DONO e os filhos (herança)
class Domicilio {
    public cor: string;
    public endereco: object;

    constructor(cor: string, endereco: object) {
        this.cor = cor;
        this.endereco = endereco;
    }

    public tocarInterfone(): string {
        return "Interfone tocado!";
    }

    protected atenderInterfone(mensagem: string): string {
        return mensagem;
    }
}

class Casa extends Domicilio {
    public entrarNaCasa(): string {
        return this.atenderInterfone("Olá, quem é?");
    }
}

const casaDoHomer = new Casa("Verde", { cidade: "Springfield" });

console.log(casaDoHomer.tocarInterfone());
// console.log(casaDoHomer.atenderInterfone());

console.log(casaDoHomer.entrarNaCasa());