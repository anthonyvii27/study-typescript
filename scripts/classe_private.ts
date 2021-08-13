class Banco {
    private cofreQtd: number = 10000;

    private debitarCofre(quantidade: number): number | string {
        if(quantidade <= this.cofreQtd) {
            this.cofreQtd -= quantidade;
            return this.cofreQtd;

        } else {
            return "O Cofre não possui a quantidade requisitada";
        }
    }

    protected sacarDoCaixa(quantidade: number) {
        return this.debitarCofre(quantidade);
    } 

    public sacarDoCaixaEletronico(quantidade: number) {
        return this.debitarCofre(quantidade);
    }
}

const nubank = new Banco();
// nubank.debitarCofre();   // ERRO POIS É PRIVADO

console.log(nubank.sacarDoCaixaEletronico(3000));

class Banco24Horas extends Banco {
    sacar(qtd: number) {
        return this.sacarDoCaixa(qtd); // O Filho tem acesso ao método protegido do Pai
    }
}

const banco14horas = new Banco24Horas();

banco14horas.sacar(2500);