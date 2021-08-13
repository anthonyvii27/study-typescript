// INTERFACE RECURSIVA - categoriaPai
interface Categoria {
    nome: string;
    id: number;
    categoriaPai?: Categoria;
}

const frontend: Categoria = {
    nome: "Front-end",
    id: 1
}

const backend: Categoria = {
    nome: "Back-end",
    id: 2
}

// INTERFACE QUE POSSUI UM ATRIBUTO QUE É UM ARRAY
interface Menu {
    categorias: Categoria[]; // Array de categorias
}

let menu: Menu = {
    categorias: [frontend, backend]
};


// INTERFACE QUE É UM ARRAY
interface Todo {
    [indice: number]: string | Categoria; // Posição numérico, valor string
}

let minhasTarefas: Todo;

minhasTarefas = [
    "TypeScript", 
    "JavaScript", 
    "PHP8", 
    {
        nome: "JavaScript",
        id: 3,
        categoriaPai: frontend
    }
];

console.log(minhasTarefas[0]); // Acessando o índice NUMÉRICO
// console.log(minhasTarefas["0"]); // ERRO POIS O INDÍCE NÃO É NUMÉRICO
