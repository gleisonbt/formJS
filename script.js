var alunos = [];

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
}

function limparCampos(){
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("linguagem").
        selectedIndex = 0;
}
