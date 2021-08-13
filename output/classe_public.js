"use strict";
class Veiculo {
    cor;
    constructor(cor) {
        this.cor = cor;
    }
    tentarAbrirPorta() {
        return false;
    }
}
const carro = new Veiculo("Vermelho");
console.log(carro.cor);
carro.cor = "Preto";
console.log(carro.cor);
console.log(carro.tentarAbrirPorta());
//# sourceMappingURL=classe_public.js.map