let amigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    inputAmigo.value = "";
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    if (amigos.length === 0) {
        asignarTextoElemento("#listaAmigos", "<li>No hay amigos agregados aún.</li>");
        return;
    }

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        asignarTextoElemento("#resultado", "<li>Por favor, agrega al menos un amigo para sortear.</li>");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    asignarTextoElemento("#resultado", `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`);
}
