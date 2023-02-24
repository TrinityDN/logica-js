
var valorInicial;
var valorMensal;
var taxa;

function enviar() {
  valorInicial = parseInt(document.getElementById("investimentoTotal").value);

  valorMensal = parseInt(document.getElementById("investimentoMensal").value);

  taxa = parseInt(document.getElementById("taxa").value);

  console.log("Valor inicial de investimento: " + valorInicial);
  console.log("Valor mensal de depósito: " + valorMensal);
  console.log("Taxa de juros mensal: " + taxa);

  swal("Valor do investimento acionado!", "Agora calcule o seu investimento anual!");

  
}

var periodo = [12];

function calcularInvestimento() {
  for (var x = 1; x <= periodo; x++) {
    var contagem = 1;
    document.getElementById("resultadoInvestimento").innerHTML += "<p> Mês " + x + ": </p>";
    var valores = (valorInicial += valorInicial * taxa + valorMensal).toFixed(2);
    document.getElementById("resultadoInvestimento").innerHTML += "<p>R$" + valores  + "</p>";
  }
}

var periodoo = [24];

function resultadoSimulado() {
  for (var y = 13; y <= periodoo; y++) {
    document.getElementById("resultadoSimulando").innerHTML += "<p> Mês simulado " + y + ": </p>";
    valores = (valorInicial += valorInicial * taxa + valorMensal).toFixed(2);
    document.getElementById("resultadoSimulando").innerHTML += "<p>R$" + valores + "</p>";
    console.log(1);
  }
}
