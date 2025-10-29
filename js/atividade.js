var nota=document.getElementById("nota").value



function urgente()
{
    var novanota, nota
    novanota=document.createElement("li")
    novanota.id="listaurgente"
    novanota.innerHTML=nota=document.getElementById("nota").value
    var div=document.getElementById("urgente")
    div.appendChild(novanota)
}
function naourgente()
{
    var novanota, nota
    novanota=document.createElement("li")
    novanota.id="listanaourgente"
    novanota.innerHTML=nota=document.getElementById("nota").value
    var div=document.getElementById("naourgente")
    div.appendChild(novanota)
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