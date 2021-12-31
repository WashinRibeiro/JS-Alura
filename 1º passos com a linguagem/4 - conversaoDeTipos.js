console.log("Conversão de Tipos\n");

console.log("ano" + 2020); // concatenou string e inteiro

console.log("2" + "2"); 

console.log(parseInt("2") + parseInt("2")); // vai transformar a string em um inteiro de foma explícita
console.log(parseFloat("6.88") + parseFloat("3.2")); // vai transformar a string em um ponto flutuante (float) de foma explícita


console.log("10" / "2"); // vai interpretar normalmente e fazer a conversão implicita 
console.log("Ricardo" / "2"); // retorna NaN (Not a Number) --> Tentou fazer a conversão mas não é um número 

console.log(6.5); // um ponto flutuante por conversão utiliza ponto e não vírgula
console.log(6,5); // usando vírgula a saída fica com um espaço branco no local da vírgula (ex.: 6 5)
