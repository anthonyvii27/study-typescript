class Professor {
    nome: string;
    idade: number;
    materia: string;

    constructor(nome: string, idade: number, materia: string) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }

    seApresentar(): string {
        return `Meu nome é ${this.nome}, tenho ${this.idade} anos e sou professor de ${this.materia}`;
    }

    dizerNotas(...notas: number[]): number {
        const notasTotal = notas.reduce((acc, atual) => acc + atual, 0);
        return notasTotal / notas.length;
    }
}

const glauco = new Professor("Glauco Amorim", 35, "DBA");

console.log(glauco.seApresentar());
console.log(glauco.dizerNotas(6, 8, 7, 2, 8, 6).toFixed(1));