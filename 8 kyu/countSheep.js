var countSheep = function (num) {
  if (num === 0) return "";

  let sheep = "";
  for (let i = 1; i <= num; i++) {
    sheep += `${i} sheep...  `;
  }
  return sheep;
};
// console.log(countSheep(4));
