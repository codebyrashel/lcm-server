const express = require('express');
const app = express();

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a / gcd(a, b)) * b;
}

function isNatural(n) {
  const num = Number(n);
  return Number.isInteger(num) && num >= 1;
}

app.get('/codebyrashel@gmail.com', (req, res) => {
  const { x, y } = req.query;

  if (!isNatural(x) || !isNatural(y)) {
    return res.type('text/plain').send('NaN');
  }

  const result = lcm(Number(x), Number(y));
  res.type('text/plain').send(String(result));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));