function divide(numerator, denominator) {
  if (numerator === 0 || denominator === 0) {
    throw "Attempted to divide by zero.";
  }
  return numerator / denominator;
}
