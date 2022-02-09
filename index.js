const express = require('express');
const app = express();
const oapi = require('./swagger');
const rateLimit = require('express-rate-limit')
const limiter = rateLimit({
    windowMs : 15 * 60 *1000,
    max: 5
})
const { FilePersistance } = require('./persistence/file-persistence');
/* Pets */

app.use(express.json())
var PetService = require('./pets/pets-service').PetService;
var petService = new PetService();


app.get('/v1/pets',
oapi.path({
    tags : ['Pets'],
    summary: "Get all pets",
    description: 'Returns all pets from the system that the user has access to',
    responses: {
        200: {
            description: "A list of pets",
            content: {
                "application/json" : {
                    schema: {
                        type : 'array',
                        items: {
                            '$ref' : '#/components/schemas/Pet'
                        }
                    }
                }
            }
        }
    }
}),

(req, res) => {
   var pets = petService.findAllPets()
   res.status(200).send(pets);

 
  
})
app.get('/v1/pets/:id', oapi.path({
    tags : ['Pets'],
    summary: "View a pet",
    description: 'Returns a pet from the system that the user has access to',
    responses: {
        200: {
            description: "View only pet",
            content: {
                "application/json" : {
                    schema: {
                        type : 'array',
                        items: {
                            '$ref' : '#/components/schemas/Pet'
                        }
                    }
                }
            }
        }
    }
}), (req, res) => {
//var pet = petService.findPetById(parseInt(req.params.id))
   
 // Gestion des erreurs 

 var pet = petService.findPetById(parseInt(req.params.id));
 console.log(pet)
 if(pet === undefined){
     res.status(404).json("Pet introuvable pour l'afficher");
 }else{
     pet = petService.DeletePet(parseInt(req.params.id))
     res.status(200).json("Pet trouvé");
 }


//res.status(200).send(pet);
})

app.delete('/v1/pets/:id', oapi.path({
    tags : ['Pets'],
    summary: "Delete a pet",
    description: 'Delete the pet that user want',
    responses: {
        200: {
            description: "Delete one pet",
            content: {
                "application/json" : {
                    schema: {
                        type : 'array',
                        items: {
                            '$ref' : '#/components/schemas/Pet'
                        }
                    }
                }
            }
        }
    }
}), (req, res) => {
  //  var pet = petService.deletePet(parseInt(req.params.id))
       
     // Gestion des erreurs 

var pet = petService.findPetById(parseInt(req.params.id));
console.log(pet)
if(pet === undefined){
    res.status(404).json("Pet introuvable pour suppression");
}else{
    pet = petService.DeletePet(parseInt(req.params.id))
    res.status(200).json("Supprimé");
}
    })

app.patch('/v1/pets/:id', oapi.path({
    tags : ['Pets'],
    summary: "Modify a pet",
    description: 'Modify the name that the user want',
    responses: {
        200: {
            description: "Modify a pet",
            content: {
                "application/json" : {
                    schema: {
                        type : 'array',
                        items: {
                            '$ref' : '#/components/schemas/Pet'
                        }
                    }
                }
            }
        }
    }
}), (req, res) => {
    // var pet = petService.editPet(parseInt(req.params.id), req.body.name)  
   
    // Gestion des erreurs 

var pet = petService.findPetById(parseInt(req.params.id));
console.log(pet)
if(pet === undefined){
    res.status(404).json("Pet introuvable pour changer le nom");
}else{
    pet = petService.DeletePet(parseInt(req.params.id))
    res.status(200).json("Supprimé");
}
   
    // res.status(200).send(pet);
})
app.post('/v1/pets', oapi.path({
    tags : ['Pet'],
    summary: "Add pet",
    description: 'Add a new pet with theses caracteristics : name, description, id',
    responses: {
        200: {
            description: "A list of pets",
            content: {
                "application/json" : {
                    schema: {
                        type : 'array',
                        items: {
                            '$ref' : '#/components/schemas/Pet'
                        }
                    }
                }
            }
        }
    }
}), (req, res) => {
    var PetId = petService.createPet(req.body.id, req.body.name)
    res.status(201).location('/v1/pets/' + PetId).send(); 
})


/* End Pets */

var StoreService = require('./store-service').StoreService;
var storeService = new StoreService();



app.use(limiter)


app.get('/v1/stores',



oapi.path({
    tags : ['Stores'],
    summary: "Get all stores",
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
}),

(req, res) => {
   var stores = storeService.findAll()
   res.status(200).send(stores);

 
  
})
app.get('/v1/stores/:id', oapi.path({
    tags : ['Stores'],
    summary: "View a store",
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
var store = storeService.findById(parseInt(req.params.id))
   
res.status(200).send(store);
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

app.patch('/v1/stores/:id', oapi.path({
    tags : ['Stores'],
    summary: "Modify a store",
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
    var store = storeService.editStore(parseInt(req.params.id), req.body.name)  
    res.status(200).send(store);
})
app.post('/v1/stores', oapi.path({
    tags : ['Stores'],
    summary: "Add store",
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
    /*
    var storId = storeService.create(req.body.id, req.body.name)
    res.status(201).location('/v1/stores/' + storId).send(); 
*/
    // Gestion des erreurs 

var pet = petService.findPetById(parseInt(req.params.id));
console.log(pet)
if(pet === undefined){
    res.status(404).json("Pet introuvable pour suppression");
}else{
    pet = petService.DeletePet(parseInt(req.params.id))
    res.status(200).json("Supprimé");
}

})

app.listen(8080, () => {
    console.log('Port fonctionnel')
})


app.use(oapi)
app.use('/swagger-ui', oapi.swaggerui)




