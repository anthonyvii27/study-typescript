interface IT {
    length: number;
}

function mostrarQuantidadeTotal<T extends IT>(valor: T): T {
    console.log(`Total: ${valor.length}`);

    return valor;
}

console.log(mostrarQuantidadeTotal("Anthony"));