"use strict";
class CadastroBasico {
    criar(dados) {
        console.log("Criando novo registro");
        return dados;
    }
    selecionar(id) {
        console.log("Dados do registro " + id);
        return {};
    }
    editar(id, novosDados) {
        console.log("Editando os dados do ID " + id);
        return novosDados;
    }
    excluir(id) {
        console.log("Excluindo registro do ID", +id);
    }
}
const novoUsuario = new CadastroBasico();
console.log(novoUsuario.criar({
    id: 1,
    nome: "Anthony",
    email: "anthony@teste.com",
    senha: "1234",
    created_at: new Date("2015-06-01"),
    updated_at: new Date("2016-06-01"),
}));
const novaCategoria = new CadastroBasico();
console.log(novaCategoria.criar({
    id: 1,
    nome: "Categoria1",
    created_at: new Date("2015-06-01"),
    updated_at: new Date("2016-06-01"),
}));
class CadastroUsuarioModerno extends CadastroBasico {
}
const novoUsuario2 = new CadastroUsuarioModerno();
console.log(novoUsuario2.criar({
    id: 1,
    nome: "Anthony",
    email: "anthony@teste.com",
    senha: "1234",
    created_at: new Date("2015-06-01"),
    updated_at: new Date("2016-06-01"),
}));
//# sourceMappingURL=classe_genericas.js.map