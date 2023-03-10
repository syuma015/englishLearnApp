const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/index', (req, res) => {
    res.render('index.ejs');
});

app.get('/tense1', (req, res) => {
    res.render('tense1.ejs');
});
// app.get('/', (req, res) => {
//     res.render('top.ejs');
//   });
  
//   app.get('/index', (req, res) => {
//     res.render('index.ejs');
//   });
  
app.listen(3000);
  