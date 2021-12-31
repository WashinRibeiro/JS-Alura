console.log("Trabalhando com Loops");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 21;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\nDestinos Possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

// let cont = 0;
// while(cont < listaDeDestinos.length) {
//     if (listaDeDestinos[cont] == destino && podeComprar
//         ) {
//         console.log("\nDestino Disponível");
//         listaDeDestinos.splice(cont, 1);
//         temPassagemComprada = true;
//         console.log(`A passagem para ${destino} foi comprada`);
//         break;
//     } else {
//         console.log("Destino Indisponível");
//     }
//     cont ++;
// }

for(let i = 0; i < listaDeDestinos.length; i++) {
    if (listaDeDestinos[i] == destino && podeComprar) {
        console.log("\nDestino Disponível");
        listaDeDestinos.splice(i, 1);
        temPassagemComprada = true;
        console.log(`A passagem para ${destino} foi comprada`);
        break;
    } else {
        console.log("Destino Indisponível");
    }
}

console.log("\nEmbarque: ");
if (podeComprar && temPassagemComprada) {
    console.log("Boa viagem");
} else {
    console.log("Você não pode embarcar");
}


