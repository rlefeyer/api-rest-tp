//utilisation d'express
const express = require('express');
let StoreService = require('./services/store-service').StoreService
let storeService = new StoreService()
let StoreServicePersistence = require('./services/store-service-persistence').StoreServicePersistence
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

// Route pour les stores
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
    // let stores = storeService.findAll();
    let stores = storeServicePersistence.findAll();
    res.status(200).send(stores);
})

// Route pour stocker un store
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
    // let storeId = storeService.create(req.body.id, req.body.name)
    let storeId = storeServicePersistence.createStore(req.body.id, req.body.name);
    res.status(201).location('/v1/stores/'+storeId).send();
})

// Route pour récupérer un store
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

// Route pour mettre à jour un store
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

// Supprimer un store
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
    // let resDelete = storeService.deleteStore(parseInt(req.params.id));
    let resDelete = storeServicePersistence.deleteStore(parseInt(req.params.id));
    if(resDelete === -1){
        res.status(404).send();
    } else {
        res.status(201).location('/v1/stores/').send('Deleted')
    }
})

// Route pour les pets
app.get('/v1/pets', oapi.path({
    tags: ['Pets'],
    summary: "Voir tous les pets",
    description: 'Permettre de voir tous les pets.',
    responses: {
        200: {
            description: 'Récupération de la liste avec succès',
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
    let pets = petService.findAll();
    res.status(200).send(pets);
})

// Route pour créer un pet
app.post('/v1/pets', oapi.path({
    tags: ['Pets'],
    summary: "Ajouter un pet",
    description: 'Ajouter un pet à la liste.',
    responses: {
        200: {
            description: 'Ajout avec succès',
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
}), (req, res) => {
    let petId = petService.createPet(req.body.id, req.body.type, req.body.genre);
    res.status(201).location('/v1/stores/' + petId).send();
})

// Route pour récupérer un pet
app.get('/v1/pets/:id', oapi.path({
    tags: ['Pets'],
    summary: "Récupérer un pet",
    description: 'Récupérer un pet selon son ID',
    responses: {
        200: {
            description: 'Récupération du pet avec succès'
        }
    }
}), (req, res) => {
    let pet = petService.findOnePet(parseInt(req.params.id));
    if(pet === -1){
        res.status(404).send();
    } else {
        res.status(201).location('/v1/stores/'+pet.id).send(pet)
    }
})

// Route pour modifier un pet
app.patch('/v1/pets/:id', oapi.path({
    tags: ['Pets'],
    summary: "Mettre à jour un pet.",
    description: 'Mettre à jour un pet selon son ID.',
    responses: {
        200: {
            description: 'MaJ avec succès'
        }
    }
}),(req, res) => {
    let pet = petService.updatePet(parseInt(req.params.id), req.body.type, req.body.genre);

    if(pet === -1){
        res.status(404).send();
    } else {
        res.status(201).location('/v1/stores/'+pet.id).send(pet)
    }
})

// Route pour supprimer un pet
app.delete('/v1/pets/:id', oapi.path({
    tags: ['Pets'],
    summary: "Supprimer un pet",
    description: 'Permettre de voir tous les pets.',
    responses: {
        200: {
            description: 'Récupération de la liste avec succès'
        }
    }
}), (req, res) => {
    let resDelete = petService.deletePet(parseInt(req.params.id));
    if(resDelete === -1){
        res.status(404).send();
    } else {
        res.status(201).location('/v1/stores/').send('Deleted')
    }
})

// Route pour ajouter un pet au store
app.post('/v1/pets/:id', oapi.path({
    tags: ['Pets & Stores'],
    summary: "Ajouter un pet à un store",
    description: 'Ajouter un pet à un store à partir de la page du pet.',
    responses: {
        200: {
            description: 'Ajout avec succès au store.'
        }
    }
}), (req, res) => {
    let resAddPetToStore = petService.addPetToStore(req.body.idStore, parseInt(req.params.id))

    if(resAddPetToStore === -1){
        res.status(404).send();
    } else {
        res.status(200).send('Ajout effectué.')
    }
})

// Lancer le serveur sur le port 3000
app.listen(8081,function(){
    console.log('le serveur est démarré sur le port 8081');
})
