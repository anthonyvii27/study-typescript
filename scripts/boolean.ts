let admin: boolean = true;

admin = false;

console.log(admin);

// admin = 1;
// admin = "1"

admin = Boolean(1); // Converte o valor passado para o tipo primitivo boolean

console.log(admin);

admin = Boolean("1");

console.log(admin);

admin = Boolean(null);

console.log(admin);

let senha = "1234";
let senhaSegura: boolean;

senhaSegura = senha.length > 8;

console.log(senhaSegura);