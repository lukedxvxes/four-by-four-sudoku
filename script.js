import { validateInput } from './utils/validate.js';
import { createBoard } from './utils/setup.js';

const sudukoBoardEl = document.querySelector('.sudoku-board');

//intial values
const game = [
  [3, null, 4, null],
  [null, 1, null, 2],
  [null, 4, null, 3],
  [2, null, 1, null],
];

//setup board
createBoard({ game, wrapper: sudukoBoardEl });

//add event listeners to inputs
const userInputEl = document.querySelectorAll('input[type="number"]');
for (let input of userInputEl) {
  input.addEventListener('change', (e) => handleUserInput(e));
}

//handle user inputs
const handleUserInput = (e) => {
  const value = e.target.value;

  const parentSquare = e.target.parentElement;
  const inputRowId = parentSquare.getAttribute('data-row');
  const inputColId = parentSquare.getAttribute('data-col');

  const isValid = validateInput({ value, inputRowId, inputColId });

  if (isValid) {
    parentSquare.innerHTML = value;
  }
};
