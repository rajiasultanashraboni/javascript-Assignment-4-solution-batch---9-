function monthlySavings(arr, livingCost) {
  //challenge part
  if (Array.isArray(arr) === false || typeof livingCost !== "number") {
    return "Invalid Input";
  }

  let totalIncome = 0;
  for (let payment of arr) {
    if (payment >= 3000) {
      let tax = payment * 0.2;
      totalIncome = totalIncome + payment - tax;
    } else {
      totalIncome = totalIncome + payment;
    }
  }

  let savings = totalIncome - livingCost;
  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));
