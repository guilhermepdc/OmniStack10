// Destruturação = Importar algo espessifico do Express usa-se {}
const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// rota do indice principal
// index tem cinco funções (index = lista, show = unico, sotre = criar, update = alterar, drotroy = deletar) 18:00
routes.get('/devs', DevController.index);
// rota de usuários
routes.post('/devs', DevController.store);
// rota de busca
routes.get('/search', SearchController.index);

module.exports = routes;

