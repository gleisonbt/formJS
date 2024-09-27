var nomes = [];
var idades = [];
var linguagens = [];

function guardarDados(){
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var linguagem = document.getElementById("linguagem").
    options[document.getElementById("linguagem").
        selectedIndex].innerHTML;

    nomes.push(nome);
    idades.push(idade);
    linguagens.push(linguagem); 

    event.preventDefault();
}

function limparCampos(){
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("linguagem").
    document.getElementById("linguagem").
        selectedIndex = 0;
}