const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());


const API = require('./Path/API.js');
app.use('/api', API);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});