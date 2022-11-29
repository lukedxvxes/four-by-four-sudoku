export const createBoard = ({ game, wrapper }) => {
  for (let [rowIndex, row] of game.entries()) {
    const rowEl = document.createElement('div');

    rowEl.classList.add(`row`);
    rowEl.setAttribute('data-row', rowIndex + 1);

    for (let [colIndex, value] of row.entries()) {
      const squareEl = document.createElement('div');
      squareEl.classList.add('square');
      squareEl.setAttribute('data-row', rowIndex + 1);
      squareEl.setAttribute('data-col', colIndex + 1);

      setSquareValue({ value, squareEl });

      rowEl.append(squareEl);
    }
    wrapper.append(rowEl);
  }
};

export const setSquareValue = ({ squareEl, value }) => {
  let insideSquare;

  if (value === null) {
    //create input
    const input = document.createElement('input');
    input.setAttribute('type', 'number');

    insideSquare = input;
    squareEl.append(input);
  } else {
    insideSquare = value;
    squareEl.innerHTML = insideSquare;
  }

  return squareEl;
};
