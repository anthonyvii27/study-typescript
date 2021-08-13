const filmesCategorias: string[] = ["Comédia", "Drama", "Romance", "Aventura"]; //Array apenas de string

filmesCategorias.push("Terror");
// filmesCategorias.push(123456);

const arrComUnionTypes: (string | number)[] = []; // Com union types

const filmesAno: Array<number | string> = []; // Outra forma de implementar

for(let ano = 2000; ano <= new Date().getFullYear(); ano++) {
    filmesAno.push(ano);
}

console.log(filmesAno);