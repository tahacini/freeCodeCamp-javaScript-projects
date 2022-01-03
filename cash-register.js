function checkCashRegister(price, cash, cid) {
  // Lastly we will return changes.
  let changes = { status: "OPEN", change: [] };
  // To find how much change I need to give it back, subtract price from cash and *100
  // so we don't encounter decimal problems.
  let myChange = (cash - price) * 100;
  // With map module collect our cash info in drawer and reverse() it to compare with converted.
  // el[1] so I only take the numerical values ex:["PENNY", 1.01]
  let myCash = cid.map((el) => Math.round(el[1] * 100)).reverse();
  // Currency Unit Values * 100
  let converted = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
  // To keep track how much and which unit I gave.
  let result = [
    ["ONE HUNDRED", 0],
    ["TWENTY", 0],
    ["TEN", 0],
    ["FIVE", 0],
    ["ONE", 0],
    ["QUARTER", 0],
    ["DIME", 0],
    ["NICKEL", 0],
    ["PENNY", 0],
  ];

  for (let i = 0; i < converted.length; i++) {
    // While Loop will search till find a 'converted' value smaller than the 'myChange'
    // and if only I have enough money from that unit in the cash drawer.
    while (myChange >= converted[i] && myCash[i] > 0) {
      // Subtract the found value from myChange because I gave change.
      myChange -= converted[i];
      // Record the units I gave.
      result[i][1] += converted[i];
      // Subtract the units from my drawer.
      myCash[i] -= converted[i];
    }
  }

  // Filter the empty Currency Units.
  // Divide by 100 so it return to its original form and push remaining to "changes.change".
  result
    .filter((el) => el[1] !== 0)
    .map((el) => [el[0], el[1] / 100])
    .forEach((el) => changes.change.push(el));

  // To check final status collect total cash
  const myFinalCash = myCash.reduce((sum, val) => sum + val, 0);

  // If I don't have enough cash to give then set status to "INSUFFICIENT_FUNDS".
  // Else IF my cash in the drawer is 0 then set status to "CLOSED".
  if (myChange > 0) {
    changes.status = "INSUFFICIENT_FUNDS";
    changes.change = [];
  } else if (myFinalCash === 0) {
    changes.status = "CLOSED";
    changes.change = [];
    result
      .map((el) => [el[0], el[1] / 100])
      .forEach((el) => changes.change.unshift(el));
  }

  // Finally return changes.
  return changes;
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
