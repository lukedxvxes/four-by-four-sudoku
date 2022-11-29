export const getRowValues = (id) => {
  let rowValues = [];
  const rowElems = document.querySelectorAll(`.square[data-row="${id}"]`);
  rowElems.forEach((el) => {
    rowValues.push(el.innerHTML);
  });

  rowValues = rowValues.filter((val) => !val.includes('input'));

  return rowValues;
};

export const getColValues = (id) => {
  let colValues = [];
  const rowElems = document.querySelectorAll(`.square[data-col="${id}"]`);
  rowElems.forEach((el) => {
    colValues.push(el.innerHTML);
  });

  colValues = colValues.filter((val) => !val.includes('input'));

  return colValues;
};
