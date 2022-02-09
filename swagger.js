const openapi = require('@wesleytodd/openapi');
const Store = require('./model/store');
const Pets = require('./model/pets');
const oapi = openapi({
    openapi: '3.0.0',
    info: {
        title: 'Swagger Petstore',
        version : '1.0.0'
    },
    host: "localhost:8080",
    schemes: "http"
})

oapi.component('schemas', 'Store', Store.schema);
oapi.component('schemas', 'Pets', Pets.schema);
module.exports = oapi;