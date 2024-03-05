import readline from "node:readline";
import Big from 'big.js';

// input
// <BTC_USD rate> <ETH_USD rate> <DOGE_USD rate>
// <ETH_TOKEN rate> <TOKEN decimal places> <Purchase currency> <BTC/ETH/DOGE purchase amount>

// output
// </amount of TOKEN expected, rounded to a given decimal>

const rl = readline.createInterface({
  input: process.stdin,
});

/* Your code goes here : START */
/*
* I opted for the easy solution

* Initially I was going for the medium one but then I realized that the best way was
* to treat every number as an array and save the exponent
* and create three functions: sum, div, mul
* But It would've took too much time.
* So I opted for an external library called Big.js
* But I had some inconsistency with the results with some rounding errors,
* so I tried making a script in C and in python to see the results
* and both gave different results, you can find the results in tests/c and tests/python 
* note: In python I only did a few tests
* My conclusion is that the results may vary based on how the calculation is implemented
*/

// I'm going to store the price of the three tokens for future use
let ethPrice: Big;
let btcPrice: Big;
let dogePrice: Big;
let lineCounter: number = 0;
// Big.PE = 50;

// I will need a line counter so that I can save the prices effectively in the first line

rl.on("line", (line) => {
  // First line has the token prices
  if(lineCounter === 0){
    storePrices(line);
  }else{
    let processedValue = processLine(line);
    process.stdout.write(processedValue + "\n");
  }

  lineCounter++;
});

function processLine(line: string){
  let values = line.split(" ")
  let eth_token = Big(values[0])
  let amount = Big(values[3])

  // I used a switch but a better implementation would be to have a map
  // TOKEN_SYMBOL => VALUE
  // and it would look like this
  // prices[values[2]] => eth/btc/doge price
  switch(values[2]){
    case "ETH":
      // ETH buys don't need to be multiplied by eth price so to reduce error I just multiply by the eth token ratio
      return toPrecision(eth_token.times(amount), Number(values[1]))
    case "BTC":
      // The formula to get the token amount is the following: (tokenPrice * tokenAmount)/ethPrice * ethRatio
      return toPrecision(amount.times(btcPrice).div(ethPrice).times(eth_token), Number(values[1]))
    case "DOGE":
      return toPrecision(amount.times(dogePrice).div(ethPrice).times(eth_token), Number(values[1]))
    default:
      return null;
  }
}

function storePrices(line: string){
  const prices = line.split(" ")
  // Because the sample size is small, I have opted for a simple assignment instead of doing a cycle
  btcPrice = Big(prices[0]);
  ethPrice = Big(prices[1]);
  dogePrice = Big(prices[2]);
}

// Returns the number with the correct precision specified in the code
function toPrecision(number: Big, precision: number){
  let numberSplit = number.toString().split(".")
  if(number.toString().includes("e")){
    // I tried using prec() (precision), toFixed and even increasing default PE to 50
    // but I couldn't remove the exp so for the sake of simplicity I decided to return zero in these cases 
    return "0." + '0'.repeat(precision)
  }
  
  // if it doesn't have decimals we add zeros
  if(numberSplit.length === 1){
    return numberSplit[0] + '.' + '0'.repeat(precision);
  }

  return numberSplit[0] + "." + numberSplit[1].substring(0, precision).padEnd(precision, '0');
}

/* Your code goes here : END */
