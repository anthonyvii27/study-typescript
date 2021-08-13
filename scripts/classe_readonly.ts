// READONLY É UM PUBLIC DE APENAS LEITURA, OU SEJA, TODO MUNDO PODE VER MAS NÃO PODE EDITAR

class Usuario {
    readonly id: number = 1;
    name: string = "João";
    private password: string = "123456";
    // #password: string = "123456";  // PRIVATE DO ECMASCRIPT É O #
    readonly dataCadastro: Date = new Date("2021-01-01");
}

const usuario = new Usuario();

// usuario.id = 3; 

console.log(usuario.id);