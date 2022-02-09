const openapi = require('@wesleytodd/openapi')
const oapi = openapi({
    openapi:'3.0.0',
    info: {
        title: 'API Pets',
        version: '1.0.0'
    },
    host:"localhost:8080",
    schemes:"http"
})

module.exports = oapi;