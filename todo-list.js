const form = document.querySelector("#form-tarefa");
const input = document.querySelector("#input-tarefa");
const lista = document.querySelector("#lista-tarefas");
const contador = document.querySelector("#contador");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function guardarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function atualizarContador() {
  const pendentes = tarefas.filter((tarefa) => !tarefa.concluida).length;

  if (tarefas.length === 0) {
    contador.textContent = "Sem tarefas ainda.";
  } else if (pendentes === 0) {
    contador.textContent = "Tudo feito! 🎉";
  } else if (pendentes === 1) {
    contador.textContent = "1 tarefa por fazer";
  } else {
    contador.textContent = `${pendentes} tarefas por fazer`;
  }
}

function renderizarTarefas() {
  lista.innerHTML = "";

  tarefas.forEach(function (tarefa) {
    const li = document.createElement("li");
    li.className = "tarefa" + (tarefa.concluida ? " concluida" : "");
    li.dataset.id = tarefa.id;

    li.innerHTML = `
      <span class="tarefa__texto">${tarefa.texto}</span>
      <button class="tarefa__apagar" aria-label="Apagar tarefa">✕</button>
    `;

    lista.appendChild(li);
  });

  atualizarContador();
}

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const textoTarefa = input.value.trim();
  if (textoTarefa === "") return;

  tarefas.push({
    id: Date.now(),
    texto: textoTarefa,
    concluida: false,
  });

  guardarTarefas();
  renderizarTarefas();
  input.value = "";
});

lista.addEventListener("click", function (evento) {
  const li = evento.target.closest(".tarefa");
  if (!li) return;

  const id = Number(li.dataset.id);

  // Se clicou no botão de apagar
  if (evento.target.classList.contains("tarefa__apagar")) {
    tarefas = tarefas.filter((tarefa) => tarefa.id !== id);
  } else {
    // Caso contrário, alterna concluída
    const tarefa = tarefas.find((tarefa) => tarefa.id === id);
    if (tarefa) tarefa.concluida = !tarefa.concluida;
  }

  guardarTarefas();
  renderizarTarefas();
});

// Editar tarefa com duplo-clique no texto
lista.addEventListener("dblclick", function (evento) {
  if (!evento.target.classList.contains("tarefa__texto")) return;

  const li = evento.target.closest(".tarefa");
  const id = Number(li.dataset.id);
  const tarefa = tarefas.find((tarefa) => tarefa.id === id);
  if (!tarefa) return;

  const novoTexto = prompt("Editar tarefa:", tarefa.texto);

  // Só atualiza se o utilizador escreveu algo e não cancelou
  if (novoTexto !== null && novoTexto.trim() !== "") {
    tarefa.texto = novoTexto.trim();
    guardarTarefas();
    renderizarTarefas();
  }
});

renderizarTarefas();

// ===== TEMA (com memória) =====
const botaoTema = document.querySelector("#toggle-tema");
const body = document.body;

const temaGuardado = localStorage.getItem("tema");

if (temaGuardado === "claro") {
  body.classList.remove("dark");
  botaoTema.textContent = "🌙";
} else {
  body.classList.add("dark");
  botaoTema.textContent = "☀️";
}

botaoTema.addEventListener("click", function () {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    botaoTema.textContent = "☀️";
    localStorage.setItem("tema", "escuro");
  } else {
    botaoTema.textContent = "🌙";
    localStorage.setItem("tema", "claro");
  }
});