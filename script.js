// Declaração
var nome = "Klayton"; // string com as duplas
var sobrenome = 'Júnior'; // string com as simples

// var anoAtual = 2023;
var anoAtual = new Date().getFullYear();

var idade = 24;

var tempoExperiencia = 3;
var peso = 77.7;

// Template String
var cargo = `Tenho ${tempoExperiencia} anos como Desenvolvedor Front-end`;
// usando aspas
var cargo2 = "Tenho " + tempoExperiencia + " anos como Desenvolvedor Front-end";

// Prática 2 - Aula 2
var nomeCompleto = `${nome} ${sobrenome}`;
var nomeCompleto2 = nome + " " + sobrenome;

var anoNascimento = anoAtual - idade;

console.log(nomeCompleto)
console.log(nomeCompleto2)
console.log(anoNascimento)

// prompt, console e alert

var meuNome = prompt("Digite seu nome completo:");

console.log(meuNome)
console.warn(meuNome)
console.error(meuNome)

console.table(["apples", "oranges", "bananas"]);

alert("Você foi sorteado para ganhar 100 mil reais!")

// parseInt e parseFloat

var idadeDigitada = prompt("Digite sua idade:");
var pesoDigitado = prompt("Digite seu peso:");

var modificada = pesoDigitado.replace(",", ".")

var idadeInteiro = parseInt(idadeDigitada);
var pesoReal = parseFloat(modificada);

console.log(+idadeDigitada)
console.log(idadeInteiro)
console.log(pesoReal)
// alt + shift + seta (cima ou baixo)

// Prática 3
var numero1 = prompt("Digite o número 1:");
var numero2 = prompt("Digite o número 2:");

var soma = parseInt(numero1) + parseInt(numero2);
var multiplicacao = parseInt(numero1) * parseInt(numero2);

console.log("A soma é: ", soma);
alert("A multiplicação é: " + multiplicacao);