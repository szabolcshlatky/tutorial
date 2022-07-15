`use strict`;

const $ = (id) => document.getElementById(id);
const $$ = (query) => document.querySelector(query);
const $$$ = (jquery) => document.querySelectorAll(jquery);

/* This code if the script lines are more above in the HTML.
$(document).ready(function() {
 ...
});
*/

const popupBtn = $$(`.popup-btn`);
const popup = $$(`.popup-wrapper`);
const closeX = $$(`.popup-close`);

popupBtn.addEventListener(`click`, () => {
  popup.style.display = `block`;
});

closeX.addEventListener(`click`, () => {
  popup.style.display = `none`;
});

// OPTIONAL way that click anywhere the pop-up will be closed:

popup.addEventListener(`click`, () => {
  popup.style.display = `none`;
});