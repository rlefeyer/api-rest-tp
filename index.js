const express = require('express')
const app = express()
const oapi = require('./swagger/swagger')
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
    windowMs: 15 *60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false
})

var StoreService = require('./services/store-service').StoreService;
var storeService = new StoreService();

var StorePersistenceService = require('./services/store-persitence-serivce').StorePersistenceService
var storePersistenceService = new StorePersistenceService();

var PetPesistenceService = require('./services/pet-persistence-service').PetPersistenceService
var petPersistenceService = new PetPesistenceService();

//Middlewares
app.use(express.json());
app.use(oapi);
app.use('/swagger-ui', oapi.swaggerui)
app.use(limiter);

/* Store */
//swagger stores list
app.get('/v1/stores', oapi.path({
    tags: ['Stores'],
    summary: "Get all stores",
    description: 'Returns all stores from the system that the user has access to',
    responses: {
        200: {
            description: 'A list of stores',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            '$ref': '#/components/schemas/Store'
                        }
                    }
                }
            }
        }
    }
}), (req,res)=>{
    var stores = storePersistenceService.findAll();
    res.status(200).send(stores);
});

//post a new store
app.post('/v1/stores', oapi.path({
    tags: ['Stores'],
    summary: "Add a new store",
    description: 'Add a store to the system that the user has access to',
    parameters: {
        schema: {
            $ref: "#/components/schemas/Store"
        }
    },
    responses: {
        201: {
            description: 'Store created',
            content: {
                'application/json': {
                    schema: {
                        type: 'int64'
                    }
                }
            }
        }
    }
}),(req,res)=>{
    var newStoreId = storePersistenceService.create(req.body.id, req.body.name, req.body.pets);
    res.status(201).location('/v1/stores/' + newStoreId).send();
});

//get specific store
app.get('/v1/stores/:id', oapi.path({
    tags: ['Stores'],
    summary: "Get a store",
    description: 'Return a specific store from the system that the user has access to',
    responses: {
        200: {
            description: 'A store',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            '$ref': '#/components/schemas/Store'
                        }
                    }
                }
            }
        }
    }
}), (req,res)=> {
    var store = storePersistenceService.findById(parseInt(req.params.id))

    if (store === undefined ){
        res.status(404).send();
    }else{
        res.status(200).location('/v1/stores/' + store.id).send(store);
    }
});

//modify a specific store
app.patch('/v1/stores/:id', oapi.path({
    tags: ['Stores'],
    summary: "Update a specific store",
    description: 'Update a specific store from the system that the user has access to',
    responses: {
        200: {
            description: 'Update a store from the list of stores',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            '$ref': '#/components/schemas/Store'
                        }
                    }
                }
            }
        }
    }
}),(req,res)=> {
    var store = storePersistenceService.update(parseInt(req.params.id), req.body.name, req.body.pets)

    if (store === undefined ){
        res.status(404).send();
    }else{
        res.status(200).location('/v1/stores/' + store.id).send(store);
    }
});

//delete a specific store
app.delete('/v1/stores/:id', oapi.path({
    tags: ['Stores'],
    summary: "Delete a specific store",
    description: 'Remove a specific store from the system that the user has access to',
    responses: {
        200: {
            description: 'Remove a from the list of stores',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            '$ref': '#/components/schemas/Store'
                        }
                    }
                }
            }
        }
    }
}),(req,res)=> {
    var stores = storePersistenceService.delete(parseInt(req.params.id));
    res.status(200).send(stores);
});
/* Store */

/* Pet */
//swagger stores list
app.get('/v1/pets', oapi.path({
    tags: ['Pets'],
    summary: "Get all pets",
    description: 'Returns all pets from the system that the user has access to',
    responses: {
        200: {
            description: 'A list of stores',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            '$ref': '#/components/schemas/Pet'
                        }
                    }
                }
            }
        }
    }
}), (req,res)=>{
    var pets = petPersistenceService.findAll();
    res.status(200).send(pets);
});

//post a new pet
app.post('/v1/pets', oapi.path({
    tags: ['Pets'],
    summary: "Add a new pet",
    description: 'Add a pet to the system that the user has access to',
    parameters: {
        schema: {
            $ref: "#/components/schemas/Pet"
        }
    },
    responses: {
        201: {
            description: 'Pet created',
            content: {
                'application/json': {
                    schema: {
                        type: 'int64'
                    }
                }
            }
        }
    }
}),(req,res)=>{
    var newPetId = petPersistenceService.create(req.body.id, req.body.name);
    res.status(201).location('/v1/pets/' + newPetId).send();
});

//get specific pet
app.get('/v1/pets/:id', oapi.path({
    tags: ['Pets'],
    summary: "Get a pet",
    description: 'Return a specific pet from the system that the user has access to',
    responses: {
        200: {
            description: 'A pet',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            '$ref': '#/components/schemas/Pet'
                        }
                    }
                }
            }
        }
    }
}), (req,res)=> {
    var pet = petPersistenceService.findById(parseInt(req.params.id))

    if (pet === undefined ){
        res.status(404).send();
    }else{
        res.status(200).location('/v1/pets/' + pet.id).send(pet);
    }
});

//modify a specific pet
app.patch('/v1/pets/:id', oapi.path({
    tags: ['Pets'],
    summary: "Update a specific pet",
    description: 'Update a specific pet from the system that the user has access to',
    responses: {
        200: {
            description: 'Update a pet from the list of pets',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            '$ref': '#/components/schemas/Pet'
                        }
                    }
                }
            }
        }
    }
}),(req,res)=> {
    var pet = petPersistenceService.update(parseInt(req.params.id), req.body.name)

    if (pet === undefined ){
        res.status(404).send();
    }else{
        res.status(200).location('/v1/pets/' + pet.id).send(pet);
    }
});

//delete a specific pet
app.delete('/v1/pets/:id', oapi.path({
    tags: ['Pets'],
    summary: "Delete a specific pet",
    description: 'Remove a specific pet from the system that the user has access to',
    responses: {
        200: {
            description: 'Remove a pet from the list of pets',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            '$ref': '#/components/schemas/Pet'
                        }
                    }
                }
            }
        }
    }
}),(req,res)=> {
    var pets = petPersistenceService.delete(parseInt(req.params.id));
    res.status(200).send(pets);
});

/* Pet */

//listening port
app.listen(8080, () => {
    console.log('Serveur lancé sur le port 8000')
})