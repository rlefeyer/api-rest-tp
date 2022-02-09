const openapi = require('@wesleytodd/openapi')
const Store = require('./Model/store')
const Pet = require("./Model/pet");
const oapi = openapi({
    openapi : '3.0.0',
    info: {
        title: 'Swagger Petstore',
        version: '1.0.0'
    },
    host: "localhost:8081",
    schemes: "http"
})
// Ajout du schéma Store
oapi.component('schemas', 'Store', Store.schema)

// Ajout du schéma Pet
oapi.component('schemas', 'Pet', Pet.schema)
module.exports = oapi;
