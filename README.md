# Lista de Tarefas (To-Do List)

App simples para gerir tarefas do dia a dia, feita em JavaScript puro (sem frameworks), como segundo projeto de prática.

## Funcionalidades

- Adicionar novas tarefas
- Marcar tarefas como concluídas (clicando nelas)
- Apagar tarefas
- As tarefas ficam guardadas no browser (`localStorage`), mesmo depois de fechar ou recarregar a página

## Tecnologias

- HTML5
- CSS3
- JavaScript (DOM, eventos, `localStorage`)

## Conceitos praticados

- Seleção de elementos do DOM (`querySelector`)
- Eventos e delegação de eventos (`addEventListener`)
- Manipulação de arrays de objetos (`push`, `splice`, `forEach`)
- Persistência de dados no browser (`localStorage`, `JSON.stringify` / `JSON.parse`)
- Padrão de "dados como fonte de verdade" — o array `tarefas` controla tudo, e o HTML é sempre reconstruído a partir dele

## Como correr

Abre o `index.html` no browser, ou usa a extensão "Live Server" no VSCode para veres as alterações em tempo real.

## Demo

🔗 [Ver site ao vivo](https://gusto2004.github.io/Projeto-2-To-do-List/)

## Próximos passos

- [ ] Adicionar opção de editar uma tarefa já criada
- [ ] Adicionar filtros (todas / pendentes / concluídas)
- [ ] Melhorar acessibilidade (navegação por teclado)