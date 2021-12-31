console.log("Trabalhando com Atribuição de Variáveis\n");

const idade = 20;
// const primeiroNome = "Washington";
const sobrenome = "Ribeiro";

let primeiroNome = "Washington";


// As duas formas abaixo trazem o mesmo resultado
// console.log(primeiroNome + " " + sobrenome);
console.log(primeiroNome, sobrenome);
console.log(`Meu primeiroNome é ${primeiroNome} ${sobrenome}`);

// Se primeiroNome for constante e fizermos "primeiroNome = primeiroNome + sobrenome;" vai retornar um erro
// já que constante é um tipo de variável que não podemos modificar.
// Em casos como esses, usaríamos o LET para definir a variável.
primeiroNome = primeiroNome + sobrenome;
primeiroNome = 2;
console.log(primeiroNome);

// Mas o mais correto nesses casos é permanecer com uma constante e criar um nova, como mostrado abaixo.
// Devemos utilizar o LET somente em casos que se faz realmente necessário essa alteração durante o código
const NomeCompleto = primeiroNome + sobrenome;


let novaIdade;
novaIdade = 26;
novaIdade = novaIdade + 1;
console.log(novaIdade);