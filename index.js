const express = require('express');
const app = express();

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a / gcd(a, b)) * b;
}

function isNatural(n) {
  if (n === undefined || n === null || n === '') return false;
  const num = Number(n);
  if (isNaN(num)) return false;
  if (!Number.isInteger(num)) return false;
  if (num < 1) return false;
  return true;
}

app.all('*', (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).type('text/plain').send('Method Not Allowed');
  }
  
  const { x, y } = req.query;

  if (!isNatural(x) || !isNatural(y)) {
    return res
      .status(200)
      .type('text/plain')
      .send('NaN');
  }

  const result = lcm(Number(x), Number(y));
  res
    .status(200)
    .type('text/plain')
    .send(String(result));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`Running on port ${PORT}`));