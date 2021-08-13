"use strict";
class Banco {
    cofreQtd = 10000;
    debitarCofre(quantidade) {
        if (quantidade <= this.cofreQtd) {
            this.cofreQtd -= quantidade;
            return this.cofreQtd;
        }
        else {
            return "O Cofre não possui a quantidade requisitada";
        }
    }
    sacarDoCaixa(quantidade) {
        return this.debitarCofre(quantidade);
    }
    sacarDoCaixaEletronico(quantidade) {
        return this.debitarCofre(quantidade);
    }
}
const nubank = new Banco();
console.log(nubank.sacarDoCaixaEletronico(3000));
class Banco24Horas extends Banco {
    sacar(qtd) {
        return this.sacarDoCaixa(qtd);
    }
}
const banco14horas = new Banco24Horas();
banco14horas.sacar(2500);
//# sourceMappingURL=classe_private.js.map