
let amigos = [];


function limparLista() {
    
    
    while (amigos.length != 0) {
        amigos.pop();
    }

    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 




    


}

function adicionarAmigo() {
    const inputField = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const nome = inputField.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    
    amigos.push(nome);

    // Update the visual list of names
    const li = document.createElement("li");
    li.textContent = nome;
    listaAmigos.appendChild(li);

    // Clear the input field
    inputField.value = "";
    inputField.focus();
}

// Function to draw a random name from the list
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Clear previous result
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione pelo menos um nome antes de sortear.");
        return;
    }

    // Draw a random name
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Display the result
    const li = document.createElement("li");
    li.textContent = `O amigo sorteado é: ${amigoSorteado}! 🎉`;
    resultado.appendChild(li);
}
