const express = require('express');

const app = express();

app.use(express.json());

// Métodos HTTP: get, post, put, delete

// Tipos de Parâmetros:

// Query Params: request.query (Filtros, ordenação, paginação, ...) > localhost:3333?search=max
app.get('/', (request, response) => {
    console.log(request.query);
    return response.json({ message: 'Hello World' });
});

// Route Params: request.params (Identificar um recurso na alteração ou remoção) > localhost:3333/users/1
app.delete('/users/:id', (request, response) => {
    console.log(request.params);
    console.log(request.params.id);
    return response.json({ message: 'Hello World' });
});

// Body: request.body (Dados para criação, ou alteração, de um registro) > { "nome": "ManoMax", "email": "x@email.com" }
app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello World' });
});

app.listen(3333);