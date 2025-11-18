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
function removerurg()
{
    var li=document.getElementById("listaurgente")
    if(li){
        li.remove()
    }else{
    alert("Não há texto para remover")    
    }
}
function removernurg()
{
    var li=document.getElementById("listanaourgente")
    if(li){
        li.remove()
    }else{
    alert("Não há texto para remover")    
    }
}
function removertudo()
{
    var li=document.getElementById("urgente")
    li.innerHTML=""
}
function removertudon()
{
    var li=document.getElementById("naourgente")
    li.innerHTML=""
}