interface CadastroPadrao {
    readonly id: number;
    readonly created_at: Date;
    readonly updated_at: Date;
}

interface CadastroUsuario extends CadastroPadrao {
    nome: string;
    email: string;
    senha: string;
}

interface CadastroCategoria extends CadastroPadrao {
    nome: string;
}


// CRIANDO CLASSE GENÉRICA
class CadastroBasico<T> {
    criar(dados: T): T {
        console.log("Criando novo registro");

        return dados;
    }

    selecionar(id: number): T {
        console.log("Dados do registro " + id);

        return { } as T;
    }

    editar(id: number, novosDados: T): T {
        console.log("Editando os dados do ID " + id);

        return novosDados;
    }

    excluir(id: number) {
        console.log("Excluindo registro do ID", + id);
    }
}


// PASSANDO A TIPAGEM PARA A CLASSE GENÉRICA COM INTERFACE
const novoUsuario = new CadastroBasico<CadastroUsuario>();

console.log(novoUsuario.criar({
    id:1,
    nome: "Anthony",
    email: "anthony@teste.com",
    senha: "1234",
    created_at: new Date("2015-06-01"), 
    updated_at: new Date("2016-06-01"), 
}));


const novaCategoria = new CadastroBasico<CadastroCategoria>();

console.log(novaCategoria.criar({
    id:1,
    nome: "Categoria1",
    created_at: new Date("2015-06-01"), 
    updated_at: new Date("2016-06-01"), 
}));



// CRIANDO UMA CLASSE QUE EXTENDE DA CLASSE GENÉRICA JÁ PASSANDO A INTERFACE
class CadastroUsuarioModerno extends CadastroBasico<CadastroUsuario> {}

const novoUsuario2 = new CadastroUsuarioModerno();

console.log(novoUsuario2.criar({
    id:1,
    nome: "Anthony",
    email: "anthony@teste.com",
    senha: "1234",
    created_at: new Date("2015-06-01"), 
    updated_at: new Date("2016-06-01"), 
}));

