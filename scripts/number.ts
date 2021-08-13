let ano: number;
let ano2: number;

ano = 2021;

ano2 = Number("2010"); //Converte a string para number utilizando da classe Number
ano2 = +"4000"; //Conversão da string para number implícito
ano2 = parseInt("4500.65");

console.log(ano2);

ano2 = parseFloat("4500.75");
// ano = "2021";

console.log(ano);
console.log(ano2);

const numeroGigante: bigint = 50n;