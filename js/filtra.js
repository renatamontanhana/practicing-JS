var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log("Digitaram no campo")
    var pacientes = document.querySelectorAll(".paciente");
    for(var i = 0; i < paciente.clientHeight; i++){
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector("info-nome");
        var nome = paciente.textContent;
    }
});