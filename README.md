# Amigo Secreto

Este sistema foi projetado para organizar e sortear uma lista de amigos para um jogo de Amigo Secreto. Ele permite que os usuários adicionem nomes à lista de amigos, exibam os participantes, e realizem um sorteio para definir quem dará um presente para quem.

## Funcionalidades

1. **Adicionar Amigos**: 
   - Os usuários podem adicionar os nomes dos amigos em um campo de entrada.
   - Os nomes são convertidos para letras maiúsculas automaticamente.
   - O sistema verifica se o nome já foi adicionado, evitando duplicações.
   - Um feedback é fornecido em caso de sucesso ou erro ao adicionar um amigo.

2. **Exibir Lista de Amigos**:
   - A lista de amigos adicionados é exibida na tela.
   - Cada nome pode ser clicado para removê-lo da lista.

3. **Realizar Sorteio**:
   - Quando houver pelo menos 4 amigos na lista, é possível realizar o sorteio.
   - O sistema embaralha a lista de amigos e mostra quem vai presentear quem.
   - Caso o número mínimo de participantes não seja atingido, uma mensagem de erro será exibida.

4. **Reiniciar**:
   - O sistema permite limpar a lista de amigos e o sorteio realizado.

## Estrutura do Código

### JavaScript
O código JavaScript gerencia toda a lógica do sistema:

- **Array `amigos[]`**: Armazena os nomes dos amigos.
- **Função `adicionar()`**: Adiciona amigos à lista, verifica duplicações e formata o nome.
- **Função `atualizarLista()`**: Atualiza a exibição da lista de amigos.
- **Função `sortear()`**: Embaralha a lista de amigos e exibe o sorteio na tela.
- **Função `reiniciar()`**: Limpa a lista de amigos e o sorteio.
- **Função `atualizarMensagemAmigo()`**: Exibe mensagens de erro ou sucesso.

### HTML
A estrutura HTML utiliza elementos para receber a entrada do usuário e exibir a lista de amigos e o resultado do sorteio.

- **Formulário de entrada**: Campo para adicionar nomes de amigos.
- **Botões**:
  - Adicionar amigos.
  - Realizar o sorteio.
  - Reiniciar o sistema.

### CSS
O estilo é configurado para uma interface moderna e minimalista, com cores chamativas e animações para exibir mensagens de erro ou sucesso.

- **Cores**:
  - Azul para o layout principal.
  - Rosa e verde para detalhes e botões.
- **Mensagens**:
  - As mensagens de erro e sucesso são exibidas dinamicamente com cores diferentes.

## Como Usar

1. **Adicionar Amigos**: Digite o nome de um amigo no campo de texto e clique em "Adicionar".
2. **Sortear**: Após adicionar pelo menos 4 amigos, clique no botão "Sortear" para realizar o sorteio.
3. **Remover Amigo**: Clique no nome de um amigo na lista para removê-lo.
4. **Reiniciar**: Se desejar começar novamente, clique em "Reiniciar".

