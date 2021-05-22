const express = require('express');
const app = express();

const cors = require('cors');
const hbc = require('express-handlebars');

app.use(cors());
app.set('view engine', 'handlebars');
app.engine('handlebars', hbc());

app.listen(3030, () => {
  console.log('Server has been started...')
} )