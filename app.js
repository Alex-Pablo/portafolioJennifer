const express = require('express');
const path = require('path');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index');
});

app.get('/AnalizadorLexico', (req, res) => {
  res.render('AnalizadorLexico');
});

app.get('/Cafeteria', (req, res) => {
  res.render('Cafeteria');
});

app.get('/Farmacia', (req, res) => {
  res.render('Farmacia');
});

app.get('/Mru-Mruv', (req, res) => {
    res.render('Mru-Mruv');
  });
  
  app.get('/Packet-Tracer', (req, res) => {
    res.render('Packet-Tracer');
  });
  
  app.get('/Sysinfo', (req, res) => {
    res.render('Sysinfo');
  });


  app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
  