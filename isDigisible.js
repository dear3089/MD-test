function hasDuplicated(numbers = []) {
  let uniqNumbers = {}; // use object to increase searching speed
  for (const num of numbers) {
    if (uniqNumbers.hasOwnProperty(num)) {
      return true;
    }
    uniqNumbers[num] = true;
  }
  return false;
}

function hasZero(numbers = []) {
  // you can also use numbers.includes(0) for checking in numbers.
  for (const num of numbers) {
    if (num == 0) {
      return true;
    }
  }
  return false;
}

function hasIndivisible(dividend = 0, dividers = []) {
  for (const divider of dividers) {
    if (dividend % divider !== 0) {
      return true;
    }
  }
  return false;
}

function isDigisible(n) {
  const numbers = n.toString().split("").map(Number);

  if (hasDuplicated(numbers) || hasZero(numbers) || hasIndivisible(n, numbers)) {
    return false;
  }

  return true
}

console.log(isDigisible(12));

