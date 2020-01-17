// Métodos HTTP: get, post, put, delete
// Tipo de parâmetros:
// Query Params: request.query (Filtros, ordenação, paginação)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: resquet;body (Dados para criação ou alteração de um registro)
// MongoDB (Não-relacional)


// express é um microframework - importar o modulo (biblioteca)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

// const é uma variável com valor definido, que não se altera
const app = express();
// Extrair da aplicação Express o servidor http
const server = http.Server(app);


setupWebsocket(server);

// app.get('/src',(request, response) => { 
//     return response.send('Hello Gui'); 
// });

// mongoose.connect('mongo "mongodb+srv://cluster0-xgwkn.mongodb.net/test"  --username omnistack', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
// });
mongoose.connect('mongodb://localhost/omnistack', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Conectado ao MongoDB"))
.catch(err => console.log(err));

// Permitir acesso externo pelo CORS. Pode colocar o endereço externo. olhar video Omnistack
app.use(cors());

// Fazer o Expresss entender requisições do formato JSON
app.use(express.json());

// deve vir depois do express.json
app.use(routes);

// localhost:3333
server.listen(3333);