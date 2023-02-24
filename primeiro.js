//Iniciando uma variável com 50 alunos do tipo inteiro.

function enviar(){

    var totalAlunos = document.getElementById("numeros").value;

    for(var x = 0; x <= totalAlunos; x++){ 
        if(x%2 == 0){
            if(x == 0){
                document.getElementById("resultadoo").innerHTML += "<p>O número é " + x +"</p>";
            }else{
                document.getElementById("resultadoo").innerHTML += "<p> O número " + x + " é par </p>"; 
            }
        }else{
            document.getElementById("resultadoo").innerHTML += "<p> O número " + x + " é impar </p>"; 
    
        }
        swal("Simulação de contagem de par ou impar realizada com sucesso!");
    }
}





