var alunos = [];
var qdteElementos = 0;

function guardarDados(event){
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var linguagem = document.getElementById("linguagem").
    options[document.getElementById("linguagem").
        selectedIndex].innerHTML;

    alunos.push({
        'nome':nome,
        'idade':idade,
        'linguagem':linguagem
    });
    
    event.preventDefault();

    limparCampos();
    exibirAlunos();
}

function limparCampos(){
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("linguagem").
        selectedIndex = 0;
}

function exibirAlunos(){
    
    var linha = alunos[qdteElementos].nome + " - " + alunos[qdteElementos].idade + " - " + alunos[qdteElementos].linguagem;
    
    var item = document.createElement("li");
    item.innerHTML = linha;
    document.getElementById("listaAlunos").appendChild(item);

    qdteElementos++;
}
