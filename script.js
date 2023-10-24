let alvoDiv = document.getElementById("alvo");
let alvoDiv2 = document.getElementById("alvo2");
// // primeiro
// const temperaturaCelsius = Number(
//   prompt("Digite a temperatura em graus Celsius:")
// );

// const temperaturaFahrenheit = (temperaturaCelsius * 9) / 5 + 32;

// alvoDiv.innerHTML = `${temperaturaCelsius} Graus Celsius <br>São ${temperaturaFahrenheit} Graus Fahrenheit.`;

// //terceiro

// const numero = Number(prompt("Digite um número:"));

// if (numero > 0) {
//   alvoDiv.innerHTML = "O número é positivo.";
// } else if (numero < 0) {
//   alvoDiv.innerHTML = "O número é negativo.";
// } else {
//   alvoDiv.innerHTML = "O número é zero.";
// }

// //quinto

// const altura = Number(prompt("Digite sua altura em metros:"));

// const peso = Number(prompt("Digite seu peso em kilos:"));

// const imc = peso / (altura * altura);

// if (imc < 18.5) {
//   alvoDiv.innerHTML = "Você está abaixo da faixa de peso ideal.";
// } else if (imc > 24.99) {
//   alvoDiv.innerHTML = "Você está acima da faixa de peso ideal.";
// } else {
//   alvoDiv.innerHTML = "Você está dentro da faixa de peso ideal.";
// }

// alvoDiv2.innerHTML += `<br>Seu IMC é: ${imc.toFixed(2)}`;

// //setimo

// let saldo = 1000;

// const valorSaque = parseFloat(
//   prompt("Digite o valor que deseja sacar (múltiplo de 5):")
// );

// if (valorSaque > 0 && valorSaque % 5 === 0) {
//   const taxaSaque = 4.5;
//   const valorTotalSaque = valorSaque + taxaSaque;

//   if (valorTotalSaque <= saldo) {
//     saldo -= valorTotalSaque;
//     alvoDiv.innerHTML = `Saque de <span style="color:rgb(2, 28, 92);">R$${valorSaque.toFixed(
//       2
//     )}</span> efetuado com sucesso.`;
//     alvoDiv.innerHTML += `<br><h6>Taxa de saque: R$${taxaSaque.toFixed(
//       2
//     )}</h6>`;
//     alvoDiv2.innerHTML += `<br>Saldo disponível:<strong> R$${saldo.toFixed(
//       2
//     )}</strong>`;
//   } else {
//     alvoDiv.innerHTML = "Você não possui saldo suficiente ";
//   }
// } else {
//   alvoDiv2.innerHTML =
//     "Valor de saque inválido. Certifique-se de que seja um número múltiplo de 5.";
// }

//nono

const velocidadeCarro = Number(prompt("Digite a velocidade do carro em Km/h:"));

if (velocidadeCarro > 80) {
  const velocidadeExcedida = velocidadeCarro - 80;
  const valorMulta = velocidadeExcedida * 5;

  alvoDiv.innerHTML = "Você foi multado por excesso de velocidade!";
  alvoDiv.innerHTML += `<h5><br>Velocidade excedida: <span style="color:rgb(2, 28, 92);">${velocidadeExcedida} Km/h</span></h5>`;
  alvoDiv2.innerHTML = `<br>Valor da multa: <strong>R$${valorMulta.toFixed(
    2
  )}</strong>`;
} else {
  alvoDiv.innerHTML = "Você está dentro do limite de velocidade permitido.";
}

// //segundo

// let dia = parseInt(prompt("Digite um número de 1 a 7."));

// let diaSemana = "";

// switch (dia) {
//   case 1:
//     diaSemana = "segunda-feira";
//     break;
//   case 2:
//     diaSemana = "terça-feira";
//     break;
//   case 3:
//     diaSemana = "quarta-feira";
//     break;
//   case 4:
//     diaSemana = "quinta-feira";
//     break;
//   case 5:
//     diaSemana = "sexta-feira";
//     break;
//   case 6:
//     diaSemana = "sábado";
//     break;
//   case 7:
//     diaSemana = "domingo";
//     break;
//   default:
//     diaSemana = "dia inválido";
//     break;
// }

// alvoDiv.innerHTML = diaSemana;

// //quarto
// const custoFabrica = parseFloat(prompt("Digite o valor do carro:"));

// const custoDistribuidor = custoFabrica * 0.28;
// console.log(custoDistribuidor);
// const valorImposto = custoFabrica * 0.45;
// console.log(valorImposto);

// const custoFinal = custoFabrica + custoDistribuidor + valorImposto;

// alvoDiv.innerHTML = `O custo final do carro é: R$${custoFinal.toFixed(2)}`;

// // sexto

// let num1 = parseFloat(prompt("digite o primeiro número:"));
// let operador = prompt("Digite o operador (+, -, *, /):");
// let num2 = parseFloat(prompt("digite o segundo número:"));

// let resultado;

// if (operador == "+") {
//   resultado = num1 + num2;
// } else if (operador == "-") {
//   resultado = num1 - num2;
// } else if (operador == "*") {
//   resultado = num1 * num2;
// } else if (operador == "/") {
//   resultado = num1 / num2;
// } else if (operador == "") {
//   resultado = "erro";
// }

// alvoDiv.innerHTML = "Resultado: " + resultado;

// //oito
// const idade = Number(prompt("Qual sua idade?"));
// const peso = Number(prompt("Quanto você pesa?"));

// console.log(idade);
// console.log(peso);
// let categoria = "";
// let categoriaPeso = "";

// if (idade <= 12) {
//   categoria = "Infantil";
//   categoriaPeso = peso;
// } else if (idade > 12 && idade <= 16) {
//   categoria = "juvenil";

//   if (peso <= 40) {
//     categoriaPeso = peso;
//     categoria = "<br>Juvenil leve";
//   } else {
//     categoriaPeso = peso;
//     categoria = "Juvenil Pesado";
//   }
// } else if (idade >= 17 && idade <= 24) {
//   categoria = "senior";
//   if (peso <= 45) {
//     categoriaPeso = peso;
//     categoria = "Senior leve";
//   } else if (peso >= 45 && peso <= 60) {
//     categoriaPeso = peso;
//     categoria = "Senior Médio";
//   } else {
//     categoriaPeso = peso;
//     categoria = "Senior Pesado";
//   }
// } else {
//   categoria = "Veterano";
//   categoriaPeso = peso;
// }
// alvoDiv.innerHTML = `Seu peso é ${categoriaPeso}Kg`;
// alvoDiv2.innerHTML = `Sua categoria é ${categoria}`;
