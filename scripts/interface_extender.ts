interface IPessoa {
    id: number;
    nome: string;
    idade: number;
}

interface IUsuario extends IPessoa {
    email: string;
    senha: string;
}

let user: IUsuario;

user = {
    id: 1,
    nome: "Anthony",
    idade: 21,
    email: "anthony@teste.com",
    senha: "abc123"
};

console.log(user);