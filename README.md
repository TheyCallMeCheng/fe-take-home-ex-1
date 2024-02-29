# Frontend Take Home Task 1

Limbo Labs Take Home Exercise 1 for Frontend React Role.

## Task

Your task is to write a processing logic that will process the [input](./input)
and produce the expected output as provided in [output](./output).

You are required to write the processing logic in the [index.ts](./index.ts) file,
specifically between the `/* Your code goes here : START */` and
`/* Your code goes here: END */`. Refrain from modifying other part of the
code, unless you feel is necessary.

As indicated in [index.ts](index.ts), the input is as the following format:

```
<BTC_USD rate> <ETH_USD rate> <DOGE_USD rate>
<ETH_TOKEN rate> <TOKEN decimal places> <Purchase currency> <BTC/ETH/DOGE purchase amount>
```

Where the first line indicates the rate of the conversion rate from `BTC` to `USD`, `ETH`
to `USD` and `DOGE` to `USD`.

The second line onwards indicates the rate of conversion from `ETH` to some token,
the number of decimal places the token uses, the currency used to purchase, and
the amount of `BTC`/`ETH`/`DOGE` used.

In the output file, every line corresponds to the amount of `TOKEN` expected with the given
input of currency.

<detail>
    <summary>What is TOKEN?</summary>

    `TOKEN` is just any arbitary token that can be purchased.

</detail>

You're encouraged to make use of comments to indicate thought process.

## Setup

1. Fork the repository on GitHub in a public repository.

2. Clone the forked repository.

3. Install the dependencies

```bash
# Using NPM
npm install

# Using PNPM
pnpm install

# Using Yarn
yarn install
```

4. Set [validate](./validate) to an executable.

5. Attempt the challenge.

6. Run the NPM script `validate` to validate the output.

7. Send the repository link to us once you're done.

## Challenge

You are free to attempt the take-home in any of the following difficulties you would prefer:

1. [Easy] Implement with an existing package.
2. [Medium] Implement without using a package, but with references. Quote the references on your
   implementations in your comments (i.e., Open Source repos / Stack Overflow links).
3. [Hard] Implement without using any package & reference.

The judgement of your skill level will be different based on whichever difficulty you've chosen.

Please let us know the difficulty you've chosen and attempted.

## F.A.Q.

<details>
    <summary>Why does the repository says exercise 1? Is there more?</summary>

    No, this is just one take-home exercise out of the collection we have. You're just
    a lucky fella to get the first one.

</details>

<details>
    <summary>This take home is too difficult, can I ask for another one?</summary>

    No, the other task are all similar in difficulty, with 3 difficulty levels. So there
    won't be much difference even if I give u other tasks.

</details>

<details>
    <summary>Why this task?</summary>

    The task is designed to test the handling of floating point accurately in JavaScript.

</details>

<details>
    <summary>I have more questions</summary>

    Feel free to reach out to ask more questions to whoever you are contacting with.

    Asking questions / guidance / hints do not penalize anything. Unless the questions
    may give too much answers, then we'll let you know before we answer.

</details>
