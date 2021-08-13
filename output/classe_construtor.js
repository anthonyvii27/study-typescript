"use strict";
class Pedido {
    produto;
    valorTotal;
    previsaoEntrega;
    constructor(produto, valorTotal, previsaoEntrega) {
        this.produto = produto;
        this.valorTotal = valorTotal;
        this.previsaoEntrega = previsaoEntrega;
    }
}
const meuPedido = new Pedido("TV 61 polegadas", 2900, new Date("2021-05-16"));
console.log(meuPedido);
//# sourceMappingURL=classe_construtor.js.map