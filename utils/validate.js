//check input value against other current row and column values
import { getRowValues, getColValues } from './getValues.js';

export const validateInput = ({ value, inputRowId, inputColId }) => {
  //return if a user removes there input
  if (value === '' || value <= 0 || value > 4) return;

  const currentValuesSet = new Set(
    getRowValues(inputRowId).concat(getColValues(inputColId))
  );
  return !currentValuesSet.has(value);
};
