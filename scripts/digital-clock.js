`use strict`;

const $ = (id) => document.getElementById(id);
const $$ = (query) => document.querySelector(query);
const $$$ = (jquery) => document.querySelectorAll(jquery);

/* This code if the script lines are more above in the HTML.
$(document).ready(function() {
 ...
});
*/

const clock = $$(`.clock`);

const tick = () => {
  const rightNow = new Date();
  const h = rightNow.getHours();
  const m = rightNow.getMinutes();
  const s = rightNow.getSeconds();
  
  const htmlCLOCK = `
    <span>${h}</span> : 
    <span>${m}</span> : 
    <span>${s}</span>
  `;

  clock.innerHTML = htmlCLOCK;
};

setInterval(tick, 1000);