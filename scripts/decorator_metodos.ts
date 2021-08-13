function decoratorMetodo(target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log({
        target,
        propertyKey,
        descriptor
    })

    console.log(descriptor.value);

    descriptor.value = (...args: unknown[]) => {
        return args.map(item => {
            //casting
            return (<string>item).toUpperCase();
        })
    };
}


class TratarMensagem {
    
    @decoratorMetodo
    dizerMensagem(...mensagens: string[]) {
        return mensagens;
    }
}

const instancia = new TratarMensagem();

console.log(instancia.dizerMensagem("Olá", "Seja bem-vindo", "Anthony"))