var read = require('readline-sync');

var valor_produto;
var valor_cofrinho;
var qtd_moedas_1real;
var qtd_moedas_50centavos;
var qtd_moedas_25_centavos;
var qtd_moedas_10_centavos;
var qtd_moedas_5_centavos;
var qtd_moedas_1_centavos;

valor_produto = read.question("Insira o valor do produto: ");
qtd_moedas_1real = read.question("Insira quantas moedas de R$1.00 existem no cofrinho: ");
qtd_moedas_50centavos= read.question("Insira quantas moedas de R$0.50 existem no cofrinho: ");
qtd_moedas_25_centavos = read.question("Insira quantas moedas de R$0.25 existem no cofrinho: ");
qtd_moedas_10_centavos = read.question("Insira quantas moedas de R$0.10 existem no cofrinho: ");
qtd_moedas_5_centavos = read.question("Insira quantas moedas de R$0.05 existem no cofrinho: ");
qtd_moedas_1_centavos = read.question("Insira quantas moedas de R$0.01 existem no cofrinho: ");

qtd_moedas_1real = parseFloat(qtd_moedas_1real);
qtd_moedas_50centavos= parseFloat(qtd_moedas_50centavos);
qtd_moedas_25_centavos = parseFloat(qtd_moedas_25_centavos);
qtd_moedas_10_centavos = parseFloat(qtd_moedas_10_centavos);
qtd_moedas_5_centavos = parseFloat(qtd_moedas_5_centavos);
qtd_moedas_1_centavos = parseFloat(qtd_moedas_1_centavos);

valor_cofrinho = qtd_moedas_1real+qtd_moedas_50centavos*0.5+qtd_moedas_25_centavos*0.25+qtd_moedas_10_centavos*0.10+qtd_moedas_5_centavos*0.05+qtd_moedas_1_centavos*0.01;

console.log();
console.log("Valor no cofrinho: "+parseFloat(valor_cofrinho));
console.log();
console.log("Valor do produto: "+valor_produto);
console.log();
if(valor_cofrinho>=valor_produto){
    console.log("Possui valor suficiente!");
}else{
    console.log("Não possui valor suficiente!");
}