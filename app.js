// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declaración de variables 

let amigos = []

// Funcion para agregar un amigo
function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;

// Mensaje de error si el campo esta vacio     
    if (nombreAmigo === ""){
        alert('Por favor, inserte un nombre');
        return;
    }
// se agrega el nombre a la lista
    amigos.push(nombreAmigo);

// Llama a la funcio de limpiar nombre
limpiarCampoNombre();

// Llama a la funcion que actualiza la lista de amigos
actualizarLista();

//validacion de que el nombre fuera agregado    
    console.log(amigos);
}

//Funcion para limpiar el campo de texto
function limpiarCampoNombre() {
    document.querySelector('#amigo').value = '';
}

//Funcion de actualizar lista visual 
function actualizarLista () {
    let listaParticipantes = document.getElementById('listaAmigos');

 //Limipia la lista actual antes de agregar uno nuevo    
    listaParticipantes.innerHTML = '';

// Recorre el arreglo 'Amigos' y agrega cada uno a la lista visual    
    amigos.forEach(function(amigo) {

//Crea un nuevo elemento lista para cada amigo
        let li = document.createElement('li');
        li.textContent = amigo;

//Agrega el elemento de lista 
        listaParticipantes.appendChild(li);
    });
}

function sortearAmigo(){
//Verifica que tenga suficientes amigos
    if (amigos.length <= 1) {
        alert('Necesita al menos 2 amigos para hacer el sorteo');
        return;
    }
//Realiza un sorteo aletorio de acuerdo al numero de indice     
    let indiceSorteado = Math.floor(Math.random()*amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

//Se elimina de la lista el amigo sorteado
    amigos.splice(indiceSorteado,1);

//Muestra el resultado del sorteo
    document.getElementById('resultado').innerHTML = `El amigo secreto es: ${amigoSorteado}`;

//Actualiza la lista despues del sorteo    
    actualizarLista();


    console.log(amigoSorteado)
//Inabilita el boton de sortear cuando ya solo queda un participante     
    if (amigos.length == 1) {
        document.getElementById('sortear').disabled = true;
        document.getElementById('resultado').innerHTML = '¡Ya no hay más amigos para sortear!';
    }

}