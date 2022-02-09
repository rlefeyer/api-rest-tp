const express = require('express')
const app = express()
const StoreService = require('./store-service').StoreService;
const PetsService = require('./pets-service').PetsService;
const Store = require('./store')
const Pet = require('./pets')
const oapi = require('./swagger')
const SS = new StoreService();
const PS = new PetsService();
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 30, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
app.use(limiter);
app.use(express.json());
app.use(oapi);
oapi.component('schemas', 'Store', Store.schema)
oapi.component('schemas', 'Pets', Pet.schema)
app.use('/swagger-ui', oapi.swaggerui)

app.route('/v1/stores').get(oapi.path({
        tags: ['Stores'],
        summary: "Get all stores",
        description: "Returns all stores from the system",
        responses: {
            200: {
                description: 'A list of stores',
                content: {'application/json': {schema: {type: 'array', 'items': {'$ref': '#/components/schemas/Store'}}}}
            },
            429:{
                description:'Too Many Requests'
            },
            500:{
                description: 'Internal Server Error'
            }
        }
    }
), function (req, res) {
    const stores = SS.findAll();
    res.status(200).send(stores);
}).post(oapi.path({
    tags: ['Stores'], summary: "Create a store", description: "Create a store", responses: {
        201: {
            description: 'Create a store', content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            name: {type: 'string'}
                        }
                    }
                }
            }
        },
        404: {
            description: 'Store Not Found'
        },
        429:{
            description:'Too Many Requests'
        }
    }
}), function (req, res) {
    const storeId = SS.createStore(new Store(parseInt(req.body.id), req.body.name))
    res.status(201).location('/v1/stores/' + storeId).send();
})

app.route('/v1/stores/:id').get(oapi.path({
    tags: ['Stores'], summary: "Get a store", description: "Get a store", responses: {
        200: {
            description: 'Create a store', content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            id: 0,
                            name: {type: 'string'}
                        }
                    }
                }
            }
        },
        404: {
            description: 'Store Not Found'
        },
        429:{
            description:'Too Many Requests'
        },
        500:{
            description: 'Internal Server Error'
        }
    }
}), function (req, res) {
    const store = SS.findById(parseInt(req.params.id));
    res.status(200).send(store)
}).delete(oapi.path({
    tags: ['Stores'], summary: "Delete a store", description: "Delete a store", responses: {
        204: {
            description: 'Delete a store',
        },
        404: {
            description: 'Store Not Found'
        },
        429:{
            description:'Too Many Requests'
        },
        500:{
            description: 'Internal Server Error'
        }
    }
}), function (req, res) {
    SS.deleteStore(parseInt(req.params.id))
    res.status(204).send("Element supprimé")
}).patch(oapi.path({
    tags: ['Stores'], summary: "Update a store", "parameters": [
        {
            "in": "body",
            "name": "name",
            "description": "New name of the store",
            "required": true,
            "schema": {
                "$ref": "#/components/schemas/Store"
            }
        }
    ], description: "Update a store", responses: {
        200: {
            description: 'Update a store', content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        id: 0,
                        name: {type: 'string'}
                    }
                }
            }
        }
        },
        404: {
            description: 'Store Not Found'
        },
        429:{
            description:'Too Many Requests'
        },
        500:{
            description: 'Internal Server Error'
        }
    }
}), function (req, res) {
    SS.updateStore(new Store(parseInt(req.params.id), req.body.name))
    res.status(200).location('/v1/stores/' + req.params.id).send();
})



app.get('/v1/getwoof', function(req,res){
    res.status(201).send(PS.findPet(PS.getWoof(req.body.id, req.body.name)));
})
app.route('/v1/pets').get(oapi.path({
        tags: ['Pets'],
        summary: "Get all pets",
        description: "Returns all pets from the system",
        responses: {
            200: {
                description: 'A list of pets',
                content: {'application/json': {schema: {type: 'array', 'items': {'$ref': '#/components/schemas/Pets'}}}}
            },
            404: {
                description: 'Pet Not Found'
            },
            429:{
                description:'Too Many Requests'
            },
            500:{
                description: 'Internal Server Error'
            }
        }
    }
), function (req, res) {
    const stores = PS.findAll();
    res.status(200).send(stores);
}).post(oapi.path({
    tags: ['Pets'], summary: "Create a pet", description: "Create a pet", "parameters": [
        {
            "in": "body",
            "name": "body",
            "description": "Pet informations",
            "required": true,
            "schema": {
                "$ref": "#/components/schemas/Pets"
            }
        }
    ], responses: {
        201: {
            description: 'Create a pet', content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            name: {type: 'string'}
                        }
                    }
                }
            }
        },
        404: {
            description: 'Pet Not Found'
        },
        429:{
            description:'Too Many Requests'
        },
        500:{
            description: 'Internal Server Error'
        }
    }
}), function (req, res) {
    console.log(parseInt(req.body.id), req.body.name, req.body.photourls);
    const petId = PS.createPet(new Pet(parseInt(req.params.id), req.body.name, req.body.photourls, req.body.category, req.body.status))
    res.status(201).location('/v1/pets/' + petId).send();
});

app.route('/v1/pets/:id').get(oapi.path({
    tags: ['Pets'], summary: "Get a pet", description: "Get a pet", responses: {
        200: {
            description: 'Pet information',  content: {'application/json': {schema: {type: 'array', 'items': {'$ref': '#/components/schemas/Pets'}}}}
        },404: {
            description: 'Pet Not Found'
        },
        429:{
            description:'Too Many Requests'
        }
    }
}), function (req, res) {
    const pet = PS.findPet(parseInt(req.params.id));
    res.status(200).send(pet)
}).delete(oapi.path({
    tags: ['Pets'], summary: "Delete a pet", description: "Delete a pet", responses: {
        204: {
            description: 'Delete a pet',
        },
        404: {
            description: 'Pet Not Found'
        },
        429:{
            description:'Too Many Requests'
        },
        500:{
            description: 'Internal Server Error'
        }
    }
}), function (req, res) {
    PS.deletePet(parseInt(req.params.id))
    res.status(204).send("Element supprimé")
}).patch(oapi.path({
    tags: ['Pets'], summary: "Update a pet", "parameters": [
        {
            "in": "body",
            "name": "name",
            "description": "New name of the pet",
            "required": true,
            "type":"string",
        },
        {
            "in": "body",
            "name": "photourls",
            "description": "Pet photos' URLs",
            "type":"array",
            "required": true,
        }
    ], description: "Update a pet", responses: {
        200: {
            description: 'Pet updated', content: {'application/json': {schema: {type: 'array', 'items': {'$ref': '#/components/schemas/Pets'}}}}
        },
        404: {
            description: 'Pet Not Found'
        },
        429:{
            description:'Too Many Requests'
        },
        500:{
            description: 'Internal Server Error'
        }
    }
}), function (req, res) {
    PS.updatePet(new Pet(parseInt(req.params.id), req.body.name, req.body.photourls, req.body.category, req.body.status))
    res.status(200).location('/v1/pets/' + req.params.id).send();
})
app.listen(8080)
console.log("[+] Server is running on port 8080")
console.log("[!] Access the server here : http://localhost:8080")