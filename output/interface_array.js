"use strict";
const frontend = {
    nome: "Front-end",
    id: 1
};
const backend = {
    nome: "Back-end",
    id: 2
};
let menu = {
    categorias: [frontend, backend]
};
let minhasTarefas;
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
console.log(minhasTarefas[0]);
//# sourceMappingURL=interface_array.js.map