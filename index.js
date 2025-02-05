const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
//or whatever folder you're going to test your images/assets from
app.use(express.static('./'));
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'test.html'))
);
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);