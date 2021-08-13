// SEMPRE USAMOS EM UNION TYPES QUANDO UM DOS POSSÍVEIS VALORES É NULL
// (NULL) Isso é bom pois limpamos a memória utilizando o null nas variáveis

let valor: null;

valor = null;

// USO COMUM
const element: HTMLHeadingElement | null = document.querySelector("h2");

let db: string | null = "mysql, 127.0.0.1, password";

db = null;


let minhaVariavel: string | undefined;

minhaVariavel = undefined;