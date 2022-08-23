// 1. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano 
// (não é necessário considerar o mês em que ela nasceu).

var input = prompt("Insira seu ano de nascimento: ");
var data = new Date();
var anoAtual = data.getFullYear();
var idade = anoAtual - input;
if(idade>=16){
    alert("Você pode votar esse ano!");
}else{
    alert("Você não pode votar esse ano");
}

// 2. Faça um programa que receba um número do usuário e verifique se este número é par ou ímpar, 
//escrevendo na tela “PAR” ou “ÍMPAR”

var input = prompt("Insira um número: ");
if(input%2==0){
    alert("PAR");
}else{
    alert("ÍMPAR");
}

// 3. Escreva um programa que verifique a validade de uma senha fornecida pelo usuário. 
//A senha válida é o número 1234. 
// Devem ser impressas as seguintes mensagens:
// - ACESSO PERMITIDO caso a senha seja válida.
// - ACESSO NEGADO caso a senha seja inválida

var input = prompt("Insira sua senha: ");
if(input=="1234"){
    alert("ACESSO PERMITIDO");
}else{s
    alert("ACESSO NEGADO");
}

// 4. As maçãs custam R$0,30 cada se forem compradas menos do que 12, 
//e R$0,25 se forem compradas 12 ou mais. Escreva um programa que leia o número de maçãs compradas, 
// calcule e escreva o valor total da compra.

var input = prompt("Insira quantas maçãs você deseja comprar: ");
input = parseFloat(input);
if(input>=12){
    alert("Total da compra é: "+input*0.25);
}else{
    alert("Total da compra é: "+input*0.30);
}

// 5. Escreva um programa para ler 
//3 valores inteiros (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.

var input1 = prompt("Insira o primeiro valor: ");
var input2 = prompt("Insira o segundo valor: ");
var input3 = prompt("Insira o terceiro valor: ");
var maior=input1, menor=input1, meio=input1;

if(input2>maior){
    maior = input2;
}
if(input3>maior){
    maior = input3;
}

if(input2<menor){
    menor = input2;
}
if(input3<menor){
    menor = input3;
}

if(input1!=menor && input1!=maior){
    meio = input1
}
if(input2!=menor && input2!=maior){
    meio = input2
}
if(input3!=menor && input3!=maior){
    meio = input3
}

alert(menor+" "+meio+" "+maior);