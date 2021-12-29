console.log(`Trabalhando com Listas\n`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log(`Destinos Possíveis:`)
// console.log(salvador, saoPaulo, rioDeJaneiro);

// --------------------------------------------------------------------
// Para facilitar essa forma de declaração, utilizaremos listas (array)

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
); 

// adicionar um novo item na lista
listaDeDestinos.push(`Curitiba`); 

console.log(`Destinos Possíveis:`);
console.log(listaDeDestinos);


// adicionar um novo item na lista
listaDeDestinos.splice(1,1); // Segunda posição, somente 1 elemento - Começando sempre em zero

console.log(`Destinos ainda Possíveis:`);
console.log(listaDeDestinos);


// imprimir posição específica
console.log(listaDeDestinos[1]);



