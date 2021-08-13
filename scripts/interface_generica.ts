interface IProcessamento<T> {
    valor: T;
    realizarProcessamento(arg: T): T;
}

const string: IProcessamento<string> = {
    valor: "hcode",
    realizarProcessamento(arg: string): string {
        return arg.toUpperCase();
    }
}

console.log(string.valor, string.realizarProcessamento("HCode Treinamentos"));