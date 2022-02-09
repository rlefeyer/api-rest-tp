const openapi = require('@wesleytodd/openapi')
const Store = require('../models/store')
const Pet = require('../models/Pet')

const oapi = openapi({
    openapi: '3.0.0',
    info:{
        title: 'Swagger Petstore',
        version: '1.0.0'
    },
    host: "localhost:8000",
    schemes: 'http'
})

oapi.component('schemas', 'Store', Store.schema)
oapi.component('schemas', 'Pet', Pet.schema)

module.exports = oapi;