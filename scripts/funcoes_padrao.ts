// atribuindo um valor default para caso não venha o assunto no parâmetro
function enviarEmail(para: string, assunto: string = "Sem assunto"): void {
    console.log({
        para,
        assunto
    });
}

enviarEmail("Anthony");

enviarEmail("Amanda", "Olá Amanda");