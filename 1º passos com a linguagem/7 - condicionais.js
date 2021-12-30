console.log(`Trabalhando com Condicionais\n`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log("Destinos Possíveis:");
console.log(listaDeDestinos);


// verificação se quem está comprando a passagem é maior de idade 
const idadeComprador = 21;
const estaAcompanhada = true;
const temPassagemComprada = true;

// if (idadeComprador >= 18) {
//     console.log("Comprado maior de idade");
//     listaDeDestinos.splice(1, 1);
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("Comprador é menor de idade e não está acompanhada, sendo assim, não posso vender");
// }


// Podemos melhorar o código acima da seguinte forma:

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Comprador maior de idade ou possúi acompanhante:");
    listaDeDestinos.splice(2, 1);
} else {
    console.log("Comprador é menor de idade e não está acompanhada, sendo assim, não posso vender");
}

console.log(listaDeDestinos);

console.log("\nEmbarque: ");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
} else {
    console.log("Você não pode embarcar");
}




// Operadores Lógicos:
// >  -> maior que
// <  -> menor que
// >= -> maior ou igual que
// <= -> menor ou igual que
// == -> igual a

// Operadores Condicionais:
// && -> e
// || -> ou