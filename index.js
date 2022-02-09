const express = require('express');
const app = express();
const oapi = require('./swagger');
const rateLimit = require('express-rate-limit');
const axios = require('axios');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5
})
// Middleware
app.use(express.json());
app.use(oapi);
app.use('/swagger-ui', oapi.swaggerui)
app.use(limiter)

var StoreService = require('./service/store-service').StoreService;
var storeService = new StoreService();

var PetsService = require('./service/pets-service').PetsService;
var petsService = new PetsService();

/** Store **/
// Lister les stores
app.get('/v1/stores', 
oapi.path({
    tags: ['Stores'],
    summary: "Get all stores",
    description: 'Returns all stores from the system that user has access to',
    responses:{
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
}), (req, res) => {
    var stores = storeService.findAll();
    res.status(200).send(stores);
})

// Créer un store
app.post('/v1/stores', 
oapi.path({
    tags: ['Stores'],
    summary: "Add new store",
    description: 'Returns all stores from the system that user has access to',
    
    parameters: [
        {
          in: "body",
          name: "body",
          description: "Objet doit être ajouté au magasin",
          required: true,
          schema: {
            $ref: "#/components/schemas/Store",
          },
            responses:{
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
        },    
    ]

}),(req,res) => {
    var storeId = storeService.create(req.body.id, req.body.name);
    res.status(201).location('/v1/stores/' + storeId).send();
})

// Chercher un store selon l'id
app.get('/v1/stores/:id', 
oapi.path({
    tags: ['Stores'],
    summary: "Find store order by ID",
    description: 'Returns all stores from the system that user has access to',
    responses:{
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
}), function(req, res){
    var store = storeService.findById(parseInt(req.params.id));
    res.status(200).send(store);
})

// Changer de nom
app.patch('/v1/stores/:id', 
oapi.path({
    tags: ['Stores'],
    summary: "Change name of store",
    description: 'Returns all stores from the system that user has access to',
    responses:{
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
}), function(req, res) {
    var update = storeService.update(parseInt(req.params.id), req.body.name);
    res.status(201).location('/v1/stores/' + update).send();
})

app.delete('/v1/stores/:id', oapi.path({
    tags : ['Stores'],
    summary: "Delete a store",
    description: 'Returns all stores from the system that the user has access to',
    responses: {
        200: {
            description: "A list of stores",
            content: {
                "application/json" : {
                    schema: {
                        type : 'array',
                        items: {
                            '$ref' : '#/components/schemas/Store'
                        }
                    }
                }
            }
        }
    }
}), (req, res) => {
    var store = storeService.deleteStore(parseInt(req.params.id))

    res.status(200).send(store);
    })

/** Pets **/
// Créer un pet
app.post('/v1/pets', 
oapi.path({
    tags: ['Pets'],
    summary: "Add new pet",
    description: 'Returns all stores from the system that user has access to',

    parameters: [
        {
          in: "body",
          name: "body",
          description: "Objet doit être ajouté au magasin",
          required: true,
          schema: {
            $ref: "#/components/schemas/Pets",
          },
            responses:{
                200: {
                    description: 'Returns all stores from the system that user has access to',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                items: {
                                    '$ref': '#/components/schemas/Pets'
                                }
                            }
                        }
                    }
                }
            }
        },    
    ]

}),(req,res) => {
    var petsId = petsService.create(req.body.id, req.body.name);
    res.status(201).location('/v1/pets/' + petsId).send();
})

// Lister les pets
app.get('/v1/pets', 
oapi.path({
    tags: ['Pets'],
    summary: "Get all pets",
    description: 'List of all animals to create',
    responses:{
        200: {
            description: 'List of all animals to create',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            '$ref': '#/components/schemas/Pets'
                        }
                    }
                }
            }
        }
    }
}), (req, res) => {
    var pets = petsService.findAll();
    res.status(200).send(pets);
})

// Chercher un pet selon l'id
app.get('/v1/pets/:id', 
oapi.path({
    tags: ['Pets'],
    summary: "Find pet order by ID",
    description: 'Animals found according to the id put in the url',
    responses:{
        200: {
            description: 'Animals found according to the id put in the url',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            '$ref': '#/components/schemas/Pets'
                        }
                    }
                }
            }
        }
    }
}), function(req, res){
    var pets = petsService.findById(parseInt(req.params.id))
    if(pets === undefined){
        res.status(404).json("Pet introuvable");
    }else{
        pets = petsService.findById(parseInt(req.params.id));
        res.status(200).send(pets);
    }
})

// Changer de nom pour le pet
app.patch('/v1/pets/:id', 
oapi.path({
    tags: ['Pets'],
    summary: "Change name of pet",
    description: 'Returns all pet from the system that user has access to',
    responses:{
        200: {
            description: 'A list of pets',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            '$ref': '#/components/schemas/Pets'
                        }
                    }
                }
            }
        }
    }
}), function(req, res) {
    var updatepet = petsService.findById(parseInt(req.params.id))
    if(updatepet === undefined){
        res.status(404).json("Impossible de changer le nom de ce pet");
    }else{
        updatepet = petsService.update(parseInt(req.params.id), req.body.name);
        res.status(201).location('/v1/pets/' + updatepet).send();
    }

})

// Supprimer le pet
app.delete('/v1/pets/:id', oapi.path({
    tags : ['Pets'],
    summary: "Delete a pet",
    description: 'Returns all pet from the system that the user has access to',
    responses: {
        200: {
            description: "A list of stores",
            content: {
                "application/json" : {
                    schema: {
                        type : 'array',
                        items: {
                            '$ref' : '#/components/schemas/Pets'
                        }
                    }
                }
            }
        }
    }
}), (req, res) => {

    var pet = petsService.findById(parseInt(req.params.id))
    if(pet === undefined){
        res.status(404).json("pet introuvable pour suppression");
    }else{
        pet = petsService.deletePet(parseInt(req.params.id))
        res.status(200).json("Supprimé");
    }
    })

app.listen(8080,function(){
    console.log(" ## Serveur démarré sur le port 3000 ##");
});