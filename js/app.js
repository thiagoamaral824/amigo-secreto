// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um novo amigo à lista
function adicionar() {
    // Obtém o valor do campo de entrada com o id 'nome-amigo'
    let amigo = document.getElementById('nome-amigo');
    // Adiciona o valor do campo ao array 'amigos'
    amigos.push(amigo.value);
    // Limpa o campo de entrada
    amigo.value = "";
    // Atualiza a lista de amigos na tela
    atualizarLista();
    // Atualiza o sorteio na tela
    atualizarSorteio();
}

// Função para atualizar a lista de amigos exibida na tela
function atualizarLista() {
    // Obtém o elemento da lista de amigos com o id 'lista-amigos'
    let lista = document.getElementById('lista-amigos');
    // Limpa o conteúdo atual da lista
    lista.innerHTML = '';

    // Itera sobre o array de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento 'paragrafo' para cada amigo
        let paragrafo = document.createElement('paragrafo');
        // Define o texto do parágrafo como o nome do amigo
        paragrafo.textContent = amigos[i];

        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });

        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);

        // Adiciona vírgula e espaço após cada nome, exceto o último
        if (i < amigos.length - 1) {
            lista.appendChild(document.createTextNode(', '));
        }
    }
}

// Função para excluir um amigo da lista
function excluirAmigo(index) {
    // Remove o amigo do array com base no índice
    amigos.splice(index, 1);
    // Atualiza a lista de amigos e o sorteio na tela
    atualizarLista();
    atualizarSorteio();
}

// Função para sortear e exibir a lista de amigos
function sortear() {
    // Embaralha a lista de amigos
    embaralhar(amigos);

    // Obtém o elemento da lista de sorteio com o id 'lista-sorteio'
    let sorteio = document.getElementById('lista-sorteio');
    // Limpa o conteúdo atual da lista de sorteio
    sorteio.innerHTML = '';

    // Itera sobre o array de amigos para criar as conexões de sorteio
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            // Para o último amigo, conecta com o primeiro amigo
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br/>';
        } else {
            // Conecta o amigo atual com o próximo amigo
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br/>';
        }
    }
}

// Função para embaralhar a lista de amigos aleatoriamente
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        // Gera um índice aleatório
        const indiceAleatorio = Math.floor(Math.random() * indice);
        // Troca o elemento atual com o elemento aleatório
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

// Função para atualizar a lista de sorteio, limpando seu conteúdo
function atualizarSorteio() {
    // Obtém o elemento da lista de sorteio com o id 'lista-sorteio'
    let sorteio = document.getElementById('lista-sorteio');
    // Limpa o conteúdo atual da lista de sorteio
    sorteio.innerHTML = '';
}

// Função para reiniciar a lista de amigos e o sorteio
function reiniciar() {
    // Limpa o array de amigos
    amigos = [];
    // Limpa o conteúdo dos elementos da lista de amigos e lista de sorteio
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
