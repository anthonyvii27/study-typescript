// UTILIZA DO SPREAD OPERATOR

function somarRenda(...meses: number[]): number {
    return meses.reduce((total, atual) => total + atual, 0);
}

console.log(somarRenda(500, 100, 250));