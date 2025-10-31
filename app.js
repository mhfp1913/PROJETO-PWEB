process.on('uncaughtException', (err) => {
  console.error('Erro não tratado:', err);
});

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {title: "Minha aplicação Express"});
});

app.get('/sobre', (req, res) => {
  res.render('sobre', { titulo: 'Sobre Nós' });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

