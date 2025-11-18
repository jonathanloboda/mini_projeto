var nota=document.getElementById("nota").value

function urgente(){
    var novanota, nota
    novanota=document.createElement("li")
    novanota.id="listaurgente"
    novanota.innerText=nota=document.getElementById("nota").value
    if(nota==""){
        alert("Digite uma nota antes de adicionar")
        return
    }
    var ul=document.getElementById("listaurgente")
    ul.appendChild(novanota)
}
function naourgente(){
    var novanota, nota
    novanota=document.createElement("li")
    novanota.id="listanaourgente"
    novanota.innerText=nota=document.getElementById("nota").value
    if(nota==""){
        alert("Digite uma nota antes de adicionar")
        return
    }
  var ul=document.getElementById("listanaourgente")
    ul.appendChild(novanota)
}
function removerurg() {
    const lista = document.getElementById("listaurgente");

    if (lista.lastElementChild) {
        lista.removeChild(lista.lastElementChild);
    }
    else{
        alert("Não há texto para remover.")
    }
}
function removernurg() {
    const lista = document.getElementById("listanaourgente");

    if (lista.lastElementChild) {
        lista.removeChild(lista.lastElementChild);
    }
    else{
        alert("Não há texto para remover.")
    }
}
function removertudo()
{
    var li=document.getElementById("listaurgente")
    li.innerHTML=""
}
function removertudon()
{
    var li=document.getElementById("listanaourgente")
    li.innerHTML=""
}