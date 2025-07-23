// app.js

import {
  salvarComentarios,
  carregarComentarios,
  contemPalavrasProibidas
} from './utils.js';

const input = document.getElementById('commentInput');
const botao = document.getElementById('saveBtn');
const lista = document.getElementById('commentsList');

// Exibe os comentários na tela
function renderizarComentarios() {
  const comentarios = carregarComentarios();
  lista.innerHTML = '';

  comentarios.forEach(c => {
    const li = document.createElement('li');
    li.textContent = c;
    lista.appendChild(li);
  });
}

// Salva um novo comentário
function salvarNovoComentario() {
  const novo = input.value.trim();

  if (!novo) {
    alert('Escreva algo antes de salvar!');
    return;
  }

  // Verifica se contém palavras proibidas
  if (contemPalavrasProibidas(novo)) {
    alert('Seu comentário contém palavras ofensivas. Por favor, revise.');
    return;
  }

  const comentarios = carregarComentarios();
  comentarios.push(novo);
  salvarComentarios(comentarios);

  input.value = '';
  renderizarComentarios();
}

// Eventos
botao.addEventListener('click', salvarNovoComentario);
window.addEventListener('load', renderizarComentarios);
