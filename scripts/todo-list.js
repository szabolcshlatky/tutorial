`use strict`;

const $ = (id) => document.getElementById(id);
const $$ = (query) => document.querySelector(query);
const $$$ = (jquery) => document.querySelectorAll(jquery);

/* This code if the script lines are more above in the HTML.
$(document).ready(function() {
 ...
});
*/

const addForm = $$(`.add`);
const list = $$(`.todos`);
const search = $$(`.search input`);

const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;

  list.innerHTML += html;
};

addForm.addEventListener(`submit`, e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  console.log(todo);

  if(todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// delete todos

list.addEventListener(`click`, e => {
  if(e.target.classList.contains(`delete`)) {
    e.target.parentElement.remove();
  }
});

// searching & filtering todos

const filterTodos = (term) => {
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add(`filtered`));

  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove(`filtered`));
};

  // keyup event

search.addEventListener(`keyup`, () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});