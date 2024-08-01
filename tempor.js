function calculateSomething(value) {
  if (typeof value !== 'number' || isNaN(value)) {
    return NaN;
  }
  
  // Perform some calculations
  return value * 2;
}

let result = calculateSomething('abc');
console.log(result); // NaN

let anotherResult = calculateSomething(5);
console.log(anotherResult); // 10
