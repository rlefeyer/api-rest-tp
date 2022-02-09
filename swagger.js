const openapi = require('@wesleytodd/openapi')
const Store = require('./store')
const Pet = require('./pets/pet')

const oapi = openapi({
    openapi: '3.0.0',
    info: {
        title : 'Swagger Peystore',
        version: '1.0.0'
    },
    host: "localhost:8000",
    schemes : "http"
})

module.exports = oapi;

oapi.component('schemas', 'Store', Store.schema)
oapi.component('schemas', 'Pet', Pet.schema)