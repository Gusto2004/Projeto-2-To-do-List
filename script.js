const form = document.querySelector('#form-tarefa');
const input = document.querySelector('#input-tarefa');
const lista = document.querySelector('#lista-tarefas');

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function guardarTarefas() {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function renderizarTarefas() {
  lista.innerHTML = '';

  tarefas.forEach(function (tarefa, indice) {
    const li = document.createElement('li');
    li.className = 'tarefa' + (tarefa.concluida ? ' concluida' : '');
    li.dataset.indice = indice;

    li.innerHTML = `
      <span>${tarefa.texto}</span>
      <button>✕</button>
    `;

    lista.appendChild(li);
  });
}

form.addEventListener('submit', function (evento) {
  evento.preventDefault();

  const textoTarefa = input.value.trim();
  if (textoTarefa === '') return;

  tarefas.push({ texto: textoTarefa, concluida: false });
  guardarTarefas();
  renderizarTarefas();
  input.value = '';
});

lista.addEventListener('click', function (evento) {
  const elementoClicado = evento.target;
  const li = elementoClicado.closest('.tarefa');
  if (!li) return;

  const indice = li.dataset.indice;

  if (elementoClicado.tagName === 'BUTTON') {
    tarefas.splice(indice, 1);
  } else {
    tarefas[indice].concluida = !tarefas[indice].concluida;
  }

  guardarTarefas();
  renderizarTarefas();
});

renderizarTarefas();