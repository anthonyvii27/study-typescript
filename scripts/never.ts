// USAR EM ERROS
function showError(mensagem: string): never {
    throw new Error(mensagem);
}

// showError("Algo deu errado!");

let n = 0;

function loopInfinito(): never {
    while(true) {
        console.log(n++)
    }
}

loopInfinito();