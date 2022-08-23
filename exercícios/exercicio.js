var entrada = prompt();
if(entrada=="Quero meu IMC"){
    var peso = prompt("Digite seu peso:");
}
var altura = prompt("Digite sua altura:");
var imc = peso/altura*altura;
alert("Seu IMC é: "+imc);

var intencoesConhecidas = {
    "imc":[]
}

//Outra forma
const input = require("readline-sync");

const peso = input.question("Qual o seu peso em kg?\n");
const altura = input.question("Qual a sua altura em m?\n");

imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log("Seu imc é:" + imc + "\nPeso Baixo ");
} else if (18.5 <= imc && imc <= 24.9) {
  console.log("Seu imc é:" + imc + "\nPeso Normal");
} else if (25 <= imc && imc <= 29.9) {
  console.log("Seu imc é:" + imc + "\nSobrepeso");
} else if (30 <= imc && imc <= 34.9) {
  console.log("Seu imc é:" + imc + "\nObesidade (Grau I)");
} else if (35 <= imc && imc <= 39.9) {
  console.log("Seu imc é:" + imc + "\nObesidade Severa (Grau II");
} else {
  console.log("Seu imc é:" + imc + "\nObesidade Mórbida (Grau III)");
}
