`use strict`;

const $ = (id) => document.getElementById(id);
const $$ = (query) => document.querySelector(query);
const $$$ = (jquery) => document.querySelectorAll(jquery);

/* This code if the script lines are more above in the HTML.
$(document).ready(function() {
 ...
});
*/

const correctAnswers = [`B`, `B`, `B`, `B`];
const form = $$(`.quiz-form`);
const result = $$(`.result`);

form.addEventListener(`submit`, e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check answers
  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]) {
      score += 25;
    }
  });

  console.log(score);

  // show result on page
  scrollTo(0, 0);
  result.querySelector(`span`).textContent = `${score}%`;
  result.classList.remove(`d-none`);

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector(`span`).textContent = `${output}%`;
    if(output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});