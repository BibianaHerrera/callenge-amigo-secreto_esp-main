// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function agregarAmigo(){
    let nombre= document.getElementById('amigo').value;
    if (typeof nombre ==String && nombre !== ""){
        amigos.push(nombre);
        let valor =getElementById('amigo').value='';
        return;
    }else{
        alert('Por favor, inserte un nombre')
    }
}

