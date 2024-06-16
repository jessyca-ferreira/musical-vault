const express = require('express');
const musicalRouter = require('./routes/musical');

const app = express();
const port = 8000;

app.use('/musical', musicalRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});