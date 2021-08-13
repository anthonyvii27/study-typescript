class Pedido {
    // OUTRA FORMA DE ESCREVER O CONSTRUTOR: INICIALIZANDO OS ATRIBUTOS, E ATRIBUINDO OS VALORES AUTOMATICAMENTE
    constructor(
        private produto: string, 
        protected valorTotal: number, 
        public previsaoEntrega: Date
    ){}
}

const meuPedido = new Pedido("TV 61 polegadas", 2900, new Date("2021-05-16"));

console.log(meuPedido);