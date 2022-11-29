import { getRowValues, getColValues } from './utils/getValues.js';
import { createBoard } from './utils/setup.js';

const sudukoBoardEl = document.querySelector('.suduko-board');
const gameSize = 4;

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
  input.addEventListener('keyup', (e) => handleUserInput(e));
}

//handle user inputs
const handleUserInput = (e) => {
  const value = e.target.value;
  //return if a user removes there input
  if (value === '' || value <= 0 || value > gameSize) return;
  const parentSquare = e.target.parentElement;
  const inputRowId = parentSquare.getAttribute('data-row');
  const inputColId = parentSquare.getAttribute('data-col');

  const isValid = validateInput({ value, inputRowId, inputColId });

  if (isValid) {
    parentSquare.innerHTML = value;
  }
};

//check input value against other current row and column values
const validateInput = ({ value, inputRowId, inputColId }) => {
  const currentValuesSet = new Set(
    getRowValues(inputRowId).concat(getColValues(inputColId))
  );
  return !currentValuesSet.has(value);
};
