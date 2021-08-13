let resultado: unknown;

resultado = {
    sucesso: true
}
resultado = "deu tudo certo";
resultado = 200;

const informacao: any = 150;
const informacaoDesconhecida: unknown = 250;

// number casa com qualquer valor, mas number nao casa com desconhecido
const primeiroNumero: number = informacao;
// const segundoNumero: number = informacaoDesconhecida; //ERRO