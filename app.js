// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function agregarAmigo(){
    let nombre= document.getElementById('amigo').value;
    if (typeof nombre === 'string' && nombre !== ""){
        amigos.push(nombre);
        document.getElementById('amigo').value='';
        mostrarAmigos();
    }else{
        alert('Por favor, inserte un nombre')
        return;
    }
    
}

function mostrarAmigos(){
    let lista=document.getElementById('listaAmigos');
    lista.innerHTML="";

    for(let i=0;i<amigos.length;i++){
        let item=document.createElement("li");
        item.textContent=amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    if (amigos.length !== 0){
        let indice=Math.floor(Math.random()*amigos.length);
        let amigoSorteado=amigos[indice];
        let resultado =document.getElementById('resultado');
        resultado.innerHTML='El amigo sorteado es '+amigoSorteado;
        let limpiarLista=document.getElementById('listaAmigos');
        limpiarLista.innerHTML='';
        
    }else{
        alert('No hay amigos para sortear');
        return;
    }
}