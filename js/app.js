let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    amigos.push(amigo.value);
    amigo.value = "";
    atualizarLista();
    atualizarSorteio();
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        // **Cria um elemento span para cada amigo com vírgula e espaço, exceto o último**
        let paragrafo = document.createElement('paragrafo');  
        paragrafo.textContent = amigos[i];  
        
        // **Adiciona um evento de clique para excluir o amigo**
        paragrafo.addEventListener('click', function() {  
            excluirAmigo(i);  
        });

        lista.appendChild(paragrafo);  

        // **Adiciona vírgula e espaço após cada nome, exceto o último**
        if (i < amigos.length - 1) {  
            lista.appendChild(document.createTextNode(', '));  
        }
    }
}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function sortear() {
    embaralhar(amigos);

    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br/>';
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
