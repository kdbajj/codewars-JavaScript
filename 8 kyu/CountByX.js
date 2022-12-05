// Given a random non-negative number,
// you have to return the digits of this number within an array in reverse order.

//code here
function digitize(n) {
  return String(n)
    .split("")
    .reverse()
    .map((x) => Number(x));
}
