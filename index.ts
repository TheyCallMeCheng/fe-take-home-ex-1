import readline from "node:readline";

// input
// <BTCUSD rate> <ETHUSD rate> <DOGEUSD rate>
// <ETHSALE rate> <SALE decimal places><Purchase currency> <BTC /ETH/DOGE purchase amount>

// output
// </amount of SALE expected, rounded to a given decimal>

const rl = readline.createInterface({
  input: process.stdin,
});

/* Your code goes here : START */
rl.on("line", (line) => {
  process.stdout.write(line + "\n");
});
/* Your code goes here : END */
