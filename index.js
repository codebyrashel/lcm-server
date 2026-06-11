const express = require('express');
const app = express();

function isNatural(str) {
  return /^[1-9]\d*$/.test(String(str));
}

function gcd(a, b) {
  while (b !== 0n) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcm(a, b) {
  return (a / gcd(a, b)) * b;
}

app.get('/codebyrashel_gmail_com', (req, res) => {
  const { x, y } = req.query;

  if (!isNatural(x) || !isNatural(y)) {
    return res.type('text/plain').send('NaN');
  }

  const result = lcm(BigInt(x), BigInt(y));

  res.type('text/plain').send(result.toString());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);