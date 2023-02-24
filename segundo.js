
for(var x = 0; x = 3; x++){
var caracteres = prompt("Informe o nome da peça");
if(caracteres.length <3){
    swal("Necessita de 3 ou mais caracteres!");
    break;
}
    var peso = prompt("Informe o peso da peça");
if(peso >99){
    console.log("Cadastre a peça!");
}else{
    swal("Não será possível cadastrar, devido a peso inferior a 100g");
    break;
}
var quantidade = prompt("Informe a quantidade de peças");
if(quantidade > 10){
    swal("Não temos capacidade suficiente para o número de peças!");
    break;
}else{
    var pecasCadastradas = [];
    swal("Peça cadastrada no sistema! ✓");
    pecasCadastradas ++;
    break;
}
}


document.getElementById("pesoPeca").innerHTML = `Peso: ` + peso + `g`;
document.getElementById("quantidadePeca").innerHTML = `Total de peças: ` + quantidade;
document.getElementById("nomePeca").innerHTML = `Nome da peça: ` + caracteres;
document.getElementById("pesoTotalPeca").innerHTML = `Peso total: ` + quantidade * peso + `g`;


