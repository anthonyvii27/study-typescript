const meuConsole: void = console.log("Hello Typescript");

console.log(meuConsole); //undefined porque o console.log nao retorna nada, é void

function mostrarFrase(): void {
    console.log("Aprendendo Typescript")
}

mostrarFrase();