class Permissao {
    constructor(
        private _nome: string,
        private _nivel: number,
    ) {}

    get nome(): string {
        return this._nome.toUpperCase();
    }

    set nome(novoNome: string) {
        if(novoNome.length < 5) {
            throw new Error("O nome da permissão deve ter no mínimo 5 letras");
        }

        this._nome = novoNome;
    }
}

const permissao = new Permissao("Administrador", 1);

console.log(permissao.nome); // Acessa o get

try {
    permissao.nome = "adm"; // Acessa o set
} catch(err) {
    console.log(err);
}

console.log(permissao.nome);