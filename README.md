# Lista de Tarefas (To-Do List)

App para gerir tarefas do dia a dia, feita em JavaScript puro (sem frameworks), como segundo projeto de prática.

## Funcionalidades

- Adicionar novas tarefas
- Marcar tarefas como concluídas (clicando nelas)
- Editar o texto de uma tarefa já criada
- Apagar tarefas
- Contador de tarefas por fazer
- Modo escuro / claro com botão de alternância, que memoriza a preferência entre visitas
- As tarefas ficam guardadas no browser (`localStorage`), mesmo depois de fechar ou recarregar a página

## Tecnologias

- HTML5
- CSS3 (variáveis CSS para os temas)
- JavaScript (DOM, eventos, `localStorage`)

## Conceitos praticados

- Seleção de elementos do DOM (`querySelector`)
- Eventos e delegação de eventos (`addEventListener`)
- Identificação de cada tarefa por um `id` único (em vez do índice do array), para uma gestão de dados mais robusta
- Manipulação de arrays de objetos (`push`, `filter`, `find`, `forEach`)
- Persistência de dados no browser (`localStorage`, `JSON.stringify` / `JSON.parse`)
- Padrão de "dados como fonte de verdade" — o array `tarefas` controla tudo, e o HTML é sempre reconstruído a partir dele

## Como correr

Abre o `index.html` no browser, ou usa a extensão "Live Server" no VSCode para veres as alterações em tempo real.

## Demo

🔗 [Ver site ao vivo](https://gusto2004.github.io/Projeto-2-To-do-List/)

## Próximos passos

- [ ] Adicionar filtros (todas / pendentes / concluídas)
- [ ] Permitir reordenar tarefas (arrastar e largar)
- [ ] Adicionar uma data-limite opcional a cada tarefa