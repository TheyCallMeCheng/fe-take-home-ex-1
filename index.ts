import readline from "node:readline";

// input
// <BTC_USD rate> <ETH_USD rate> <DOGE_USD rate>
// <ETH_TOKEN rate> <TOKEN decimal places> <Purchase currency> <BTC/ETH/DOGE purchase amount>

// output
// </amount of TOKEN expected, rounded to a given decimal>

const rl = readline.createInterface({
  input: process.stdin,
});

/* Your code goes here : START */
rl.on("line", (line) => {
  process.stdout.write(line + "\n");
});
/* Your code goes here : END */
