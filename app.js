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