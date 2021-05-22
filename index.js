const express = require('express');
const app = express();
const data = require('./data.js')
const cors = require('cors');
const hbs = require('express-handlebars');


app.use(cors());
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs());



app.get('/', (req, res) => {
  res.render("home")
})

app.get('/politic/:id', (req, res) => {
  res.render("politic")
})

app.get('/sport/:id', (req, res) => {
  res.render("home")
})

app.get('/IT/:id', (req, res) => {
  res.render("IT")
})

app.get('/contacts', (req, res) => {
  res.render("home")
})

app.listen(3030, () => {
  console.log('Server has been started...')
} )