function decoratorAttr(target: unknown, propertyKey: string) {
    const novoNome = `_${propertyKey}`;
    
    Object.defineProperty(target, propertyKey, {
        get() {
            return this[novoNome].toUpperCase();
        },
        set(novoValor) {
            this[novoNome] = novoValor.split('').reverse().join();
        }
    });
}

class Animal {
    @decoratorAttr
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

const pluto = new Animal("Pluto");

console.log(pluto.nome);