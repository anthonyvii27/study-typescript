export function debug(classe: unknown) {
    console.log("A classe foi criada!", classe);
}

// Injecao de atributos
export function log(constructor: any) {
    return class extends constructor {
        created_at: Date = new Date("2020-02-15");
    }
}