const express = require('express')
const app = express()
const petService = require('./pet-service').petService;
const pet = require('./pet')
const oapi = require('./swagger')
const PS = new petService();
const axios = require('axios');


app.use(express.json());
app.use(oapi);
oapi.component('schemas', 'pet', pet.schema)
app.use('/swagger-ui', oapi.swaggerui)


// --------------Get all pets --------------
app.route('/v1/pets').get(oapi.path({
        tags: ['pets'],
        summary: "Get all pets",
        description: "Returns all pets from the system",
        responses: {
            200: {
                description: 'A list of pets',
                content: {'application/json': {schema: {type: 'array', 'items': {'$ref': '#/components/schemas/pet'}}}}
            },

            500: {
                description: 'Error server',
            }
        }
    }
), function (req, res) {
    const pets = PS.findAll();
    res.status(200).send(pets);

//-------------- Create a pet -----------------
}).post(oapi.path({
    tags: ['pets'], summary: "Create a pet", description: "Create a pet", responses: {
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

        400: {
            description: 'Invalid pet',
        },
        500: {
            description: 'Error server',
        }
    }
}), function (req, res) {
    const petId = PS.createpet(new pet(parseInt(req.body.id), req.body.name, req.body.status, req.body.category))
    res.status(201).location('/v1/pets/' + petId).send("Element ajouté");
})

// ------------- Get one pet with id ----------------
app.route('/v1/pets/:id').get(oapi.path({
    tags: ['pets'], summary: "Get a pet", description: "Get a pet", responses: {
        200: {
            description: 'Create a pet', content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            id: {type: "integer", format:"int64"},
                            name: {type: 'string'}
                        }
                    }
                }
            }
        },

        400: {
            description: 'Invalid id pet supplied',
        },
        404: {
            description: 'Not found a pet',
        },
        500: {
            description: 'Error server',
        }
    }
}), function (req, res) {
    const pet = PS.findById(parseInt(req.params.id));
    res.status(200).send(pet);

// ----------------- Delete a pet ----------------------
}).delete(oapi.path({
    tags: ['pets'], summary: "Delete a pet", description: "Delete a pet", responses: {

        204: {
            description: 'Delete a pet',
        },
        400: {
            description: 'Invalid id pet supplied',
        },
        404: {
            description: 'Not found a pet',
        },
        500: {
            description: 'Error server',
        }
    }
}), function (req, res) {
    PS.deletepet(parseInt(req.params.id));
    res.status(204).send("Element supprimé");

//-------------------- Update a pet --------------------
}).patch(oapi.path({
    tags: ['pets'], summary: "Update a pet", "parameters": [
        {
            "in": "body",
            "name": "name",
            "category": "category",
            "status": "status",
            "required": true,
            "schema": {
                "$ref": "#/components/schemas/pet"
            }
        }
    ], description: "Update a pet", 
    
    responses: {
        200: {
            description: 'Update a pet',
        },
        400: {
            description: 'Invalid id pet supplied',
        },
        404: {
            description: 'Not found a pet',
        },
        500: {
            description: 'Error server',
        }
    }
}), function (req, res) {
    PS.updatepet(new pet(parseInt(req.params.id), req.body.name, req.body.status, req.body.category))
    res.status(200).location('/v1/pets/' + req.params.id).send("Element modifié");
})

app.listen(8080)
console.log("[+] Server is running on port 8080")
console.log("[!] Access the server here : http://localhost:8080")