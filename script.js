// variáveis

let string = "Zezé Di Camargo";
let string2 = "Só as melhores"
let num = 123;

console.log("%s %s %s", string, string2, num);

// booleanos

let idade = 17
let isMaiorIdade = idade >= 18 

console.log(isMaiorIdade);

// Nulls e Undefined

let mundialPalmeiras = null;
let meuPresidente;

if (mundialPalmeiras) {
    console.log("Verdão");
} else {
    console.log("Bora Mengão!!!");
}

if (meuPresidente) {
    console.log("Plano nacional");
} else {
    console.log("Estocar vento");
}

// CONVERSÃO DE DADOS NO JS
let numero1 = 1;
let numeroString1 = String(numero1);
console.log(numero1, numeroString1);

let stringNumero2 = "2";
let numero2 = Number(stringNumero2);
console.log(stringNumero2, numero2);

let numeroToString = numero1.toString();
console.log(numeroToString);

let stringToNumero = Number.parseInt(stringNumero2);
console.log(stringToNumero);

// Estruturas de repetição
for (let i = 0; i < 4; i++) {
    console.log(i);
}

