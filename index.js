const express = require('express');
let StoreService = require('./store-service').StoreService
let storeService = new StoreService()
let StoreServicePersistence = require('./store-service-persistence').StoreServicePersistence
let storeServicePersistence = new StoreServicePersistence()
let PetService = require('./services/pet-service').PetService
let petService = new PetService()
const oapi = require('./swagger')
let FilePersistence = require('./persistence/file-persistance').FilePersistance
let filePersistence = new FilePersistence()


const app = express();
app.use(express.json())
app.use(oapi)
app.use('/swagger-ui', oapi.swaggerui)

app.get('/v1/stores', oapi.path({
    tags: ['Stores'],
    summary: "Get all stores",
    description: 'Retourne tous les stores',
    responses: {
        200: {
            description: 'A list of stores',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            '$ref': '#components/schemas/Store'
                        }
                    }
                }
            }
        }
    }
}), (req, res) =>{
    let stores = storeServicePersistence.findAll();
    res.status(200).send(stores);
})

app.post('/v1/stores', oapi.path({
    tags: ['Stores'],
    summary: "Add one store",
    description: 'Ajoute un store.',
    responses: {
        200: {
            description: 'Add a store',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            '$ref': '#components/schemas/Store'
                        }
                    }
                }
            }
        }
    }
}), (req, res) =>{
    let storeId = storeServicePersistence.createStore(req.body.id, req.body.name);
    res.status(201).location('/v1/stores/'+storeId).send();
})

app.get('/v1/stores/:id', oapi.path({
    tags: ['Stores'],
    summary: "Récupérer un store selon son id",
    description: 'Retourne un store',
    responses: {
        200: {
            description: 'Infos d\'un store'
        }
    }
}), (req, res) =>{
    let store = storeService.findById(parseInt(req.params.id));
    if(store === -1){
        res.status(404).send();
    } else {
        res.status(201).location('/v1/stores/'+store.id).send(store)
    }
})

app.patch('/v1/stores/:id', oapi.path({
    tags: ['Stores'],
    summary: "Update one store",
    description: 'Met à jour un store',
    responses: {
        200: {
            description: 'Mis à jour effectuée'
        }
    }
}),(req,res)=>{
    let store = storeService.patchStore(parseInt(req.params.id), req.body.name);

    if(store === -1){
        res.status(404).send();
    } else {
        res.status(201).location('/v1/stores/'+store.id).send(store)
    }
})

app.delete('/v1/stores/:id', oapi.path({
    tags: ['Stores'],
    summary: "Delete one store",
    description: 'Supprime un store.',
    responses: {
        200: {
            description: 'Supprimé avec succès'
        }
    }
}), (req, res) => {
    let resDelete = storeServicePersistence.deleteStore(parseInt(req.params.id));
    if(resDelete === -1){
        res.status(404).send();
    } else {
        res.status(201).location('/v1/stores/').send('Deleted')
    }
})

//////////////////GET///////////////////////////

app.get('/v1/pets', oapi.path({
    tags: ['Pets'],
    summary: "Get all pets",
    description: 'Get all informations about all pets',
    responses: {
        200: {
            description: 'Informations sur les animaux'
        }
    }
}), (req, res) =>{
    let pets = petService.findAll();
    res.status(200).send(pets);
})


app.get('/v1/pets/:id', oapi.path({
    tags: ['Pets'],
    summary: "Get one pet",
    description: 'Get all informations about one pet',
    responses: {
        200: {
            description: 'Informations sur un animal'
        }
    }
}), (req, res) =>{
    let pets = petService.findById(parseInt(req.params.id));
    res.status(200).send(pets);
})

//////////////////POST///////////////////////////

app.post('/v1/pets', oapi.path({
    tags: ['Pets'],
    summary: "Add one pet",
    description: "Ajout d'un animal",
    responses: {
        200: {
            description: 'Animal ajouté',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            '$ref': '#components/schemas/Pet'
                        }
                    }
                }
            }
        }
    }
}), (req, res) =>{
    let storeId = petService.createPet(req.body.id, req.body.name);
    res.status(201).location('/v1/Pets/'+req.body.id).send();
})

//////////////////PATCH///////////////////////////

app.patch('/v1/pets/:id', oapi.path({
    tags: ['Pets'],
    summary: "Update one pet",
    description: "Met à jour un animal",
    responses: {
        200: {
            description: 'Mis à jour effectuée'
        }
    }
}),(req,res)=>{
    let pet = petService.updatePet(parseInt(req.params.id), req.body.name);

    if(pet === -1){
        res.status(404).send();
    } else {
        res.status(201).location('/v1/pets/'+pet.id).send(pet)
    }
})

//////////////////DELETE///////////////////////////

app.delete('/v1/pets/:id', oapi.path({
    tags: ['Pets'],
    summary: "Delete one pet",
    description: 'Supprime un animal.',
    responses: {
        200: {
            description: 'Supprimé avec succès'
        }
    }
}), (req, res) => {
    let resDelete = petService.deletePet(parseInt(req.params.id));
    if(resDelete === -1){
        res.status(404).send();
    } else {
        res.status(201).location('/v1/pets/').send('Deleted')
    }
})

// Lancer le serveur sur le port 3000
app.listen(3000,function(){
    console.log('Serveur sur port 3000');
})
