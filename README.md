# To-do List

An app to manage everyday tasks, built with vanilla JavaScript (no frameworks). It was my second practice project.

## Features

- Add new tasks
- Mark tasks as completed (by clicking them)
- Edit the text of an existing task
- Delete tasks
- Counter of tasks left to do
- Dark / light mode with a toggle button, remembered between visits
- Tasks are saved in the browser (`localStorage`), even after closing or reloading the page

## Technologies

- HTML5
- CSS3 (CSS variables for the themes)
- JavaScript (DOM, events, `localStorage`)

## Concepts practiced

- Selecting DOM elements (`querySelector`)
- Events and event delegation (`addEventListener`)
- Identifying each task by a unique `id` (instead of the array index), for more robust data handling
- Working with arrays of objects (`push`, `filter`, `find`, `forEach`)
- Persisting data in the browser (`localStorage`, `JSON.stringify` / `JSON.parse`)
- The "data as the source of truth" pattern: the `tasks` array controls everything, and the HTML is always rebuilt from it

## How to run

Open `index.html` in your browser, or use the "Live Server" extension in VS Code to see changes in real time.

## Demo

🔗 [View the live site](https://gusto2004.github.io/Projeto-2-To-do-List/)

## Next steps

- [ ] Add filters (all / pending / completed)
- [ ] Allow reordering tasks (drag and drop)
- [ ] Add an optional due date to each task
