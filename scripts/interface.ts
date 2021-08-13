// CRIANDO UM INTERFACE AGORA
interface IEndereco {
    logradouro: string;
    numero: number;
    bairro: string;
    cidade: string;
}

let endereco: IEndereco;



// INTERFACE COM PARÂMETROS OPCIONAIS
interface IProduto {
    nome: string;
    preco: number;
    descricao?: string; // Parâmetro opcional - ?
    dataValidade: Date;
}

// Com a descrição
const produtoDados: IProduto = {
    nome: "Notebook",
    preco: 2000,
    descricao: "Meu notebook superpotente",
    dataValidade: new Date(2022, 11, 1)
}

// Sem a descrição
const produtoDados2: IProduto = {
    nome: "Notebook 2",
    preco: 3000,
    dataValidade: new Date(2022, 11, 1)
}



// INTERFACES COM READONLY
interface ICurso {
    readonly titulo: string;
    descricao?: string;
    preco: number;
    cargaHoraria: number;
    classificacao: number;
}

const curso: ICurso = {
    titulo: "TypeScript",
    preco: 5000,
    cargaHoraria: 10,
    classificacao: 5
}

// curso.titulo = "PHP 8";  // ERRO - Esse atributo é apenas leitura (READONLY)
curso.preco = 6000;   // Pode pois não é readonly
console.log(curso);



// INTERFACES QUE ESPERAM FUNCOES
interface ISoma {
    (num1: number, num2: number): number;
}

let primeiraSoma: ISoma;

primeiraSoma = (numero1, numero2) => {
    return numero1 + numero2;
    // return true;
}



// INTERFACES QUE ESPERAM METODOS
interface ICalculos {
    somar(a: number, b: number): number;
    subtrair(a: number, b: number): number;
    multiplicar(a: number, b: number): number;
    dividir(a: number, b: number): number;
}

let calculadora: ICalculos;

function adicao(a: number, b: number) {
    return a + b;
}

calculadora = {
    dividir: (numero1, numero2) => {
        return numero1 / numero2;
    },
    multiplicar: (numero1, numero2) => numero1 * numero2,
    subtrair: function(numero1, numero2) {
        return numero1 - numero2;
    },
    somar: adicao,
}

console.log(calculadora.multiplicar(9,7));