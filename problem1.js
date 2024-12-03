function calculateMoney(ticketSale) {
  if (ticketSale < 0 || typeof ticketSale !== "number") {
    return "invalid Number";
  }
  let remainingAmount = ticketSale * 120 - (500 + 8 * 50);
  return remainingAmount;
}
const result = calculateMoney(10);
const result1 = calculateMoney(1055);
const result2 = calculateMoney(93);
const result3 = calculateMoney(-130);
const result4 = calculateMoney("abcd");
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
