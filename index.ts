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
* I opted for the easy solution.
* While reading this https://floating-point-gui.de/formats/fp/ 
* I found a floating point visualizer https://evanw.github.io/float-toy/
* Which made me realize that there is a limit in precision to the 64 bit float that js uses
* exactly 15.95 decimals can be rapresented, and I noticed that was right where my problems were found.
* So using the debugger I went inside bigjs times() and div() functions
* and noticed that my imprecisions were made with the divisions
* So after some trial and error I notied that there is a precision parameter 
* specifically designed for operations made with divisions. 
* The standard DP is 20 which was making my calculations in the divisions off by 0.000000000000000000001
* And it was amplified later by the multiplication
*
*/

// I'm going to store the price of the three tokens for future use
let ethPrice: Big;
let btcPrice: Big;
let dogePrice: Big;
let lineCounter: number = 0;
Big.PE = 30;
Big.DP = 30;

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
  // if the number is small, use toFixed to return a number an truncate to precision
  if(number.toString().includes("e")){
    return number.toFixed(precision, 0);
  }
  
  // if it doesn't have decimals we add zeros
  if(numberSplit.length === 1){
    return numberSplit[0] + '.' + '0'.repeat(precision);
  }

  return numberSplit[0] + "." + numberSplit[1].substring(0, precision).padEnd(precision, '0');
}


/* Your code goes here : END */
