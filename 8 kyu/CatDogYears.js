var humanYearsCatYearsDogYears = function (humanYears) {
  let catYears = 15;
  let dogYears = 15;

  if (humanYears === 2) {
    catYears += 9;
    dogYears += 9;
  } else if (humanYears > 2) {
    catYears += 9 + (humanYears - 2) * 4;
    dogYears += 9 + (humanYears - 2) * 5;
  }

  return [humanYears, catYears, dogYears];
};
