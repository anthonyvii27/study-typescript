const site: unknown = "http://hcode.com.br";
let sitesFavoritos: string[] = [];

// REALIZANDO CASTING

sitesFavoritos.push(site as string); // SITE É SIM UMA STRING

// ou 

sitesFavoritos.push(<string>site); // NÃO FUNCIONA NO REACT