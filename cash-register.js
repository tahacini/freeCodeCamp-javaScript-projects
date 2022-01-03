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
