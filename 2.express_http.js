const express = require('express');


const app = express();

const port = 8004;

app.get('/', (req,res) => {
  res.send('hello world 1');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`visit http://127.0.0.1:${port}`)
})
