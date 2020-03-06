const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
  }
  
app.use(cors(corsOptions))
app.use(bodyParser.json());
require('./routes/clients')(app);
require('./routes/invoices')(app);
require('./routes/payments')(app);

app.listen(3000, () => {
    console.log('Server starter on port 3000');
});