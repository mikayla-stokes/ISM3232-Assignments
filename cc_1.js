//calcTip function
function calcTip(bill) {
  return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
}

// Example
const bill = 100;
const tip = calcTip(bill);
console.log("Tip", tip.toFixed(2));

// Output Details
console.log(`The bill was $${bill.toFixed(2)}, the tip was $${tip.toFixed(2)}, and the total value $${(bill + tip).toFixed(2)}.`);

// Arrays
const bills = [275, 40, 430, 125, 555, 44]
const tips = bills.map(bill => calcTip(bill));
const totals = bills.map((billItem, index) => billItem + tips[index]);

//Displaying arrays
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);
