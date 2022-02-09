const fs = require('fs');
const stores = require("../resources/stores.json");
const pets = require("../resources/pets.json");
const axios = require("axios");
FilePersistance = function () {
    // Récupérer les stores de la BDD
    this.findAllStores = function () {
        let stores = require('../resources/stores.json');
        stores.forEach(store =>{
            let tabPets = [];
            store.pets.forEach(petId =>{
                tabPets.push(this.findByIdPet(petId))
            })
            store.pets = tabPets
        })

        return stores;
    }

    // Stocker un store dans la BDD
    this.createStore = function (store){
        let stores = require('../resources/stores.json')
        stores.push(store);
        let data = JSON.stringify(stores);
        fs.writeFileSync('resources/stores.json', data);

        return store.id;
    }

    // Récupérer un store de la BDD
    this.findByIdStore = function(id){
        let stores = require('../resources/stores.json')
        let res = -1
        stores.forEach(store =>{
            if(store.id === id) res = store
        })
        return res;
    }

    // Supprimer un store
    this.deleteStore = function (id){
        let stores = require('../resources/stores.json')
        let store = this.findByIdStore(id);
        if(store === -1){
            return -1
        } else {
            stores.splice(stores.indexOf(store),1)
            let data = JSON.stringify(stores);
            fs.writeFileSync('resources/stores.json', data);
            return 1
        }
    }

    // Récupérer tous les pets de la BDD
    this.findAllPets = function () {
        return require('../resources/pets.json')
    }

    // Récupérer un pet de la BDD
    this.findByIdPet = function (id) {
        let pets = require('../resources/pets.json')
        let res = -1
        pets.forEach(pet =>{
            if(pet.id === id) res = pet
        })
        return res;
    }

    // Stocker un pet dans la BDD
    this.createPet = function (pet) {
        let pets = require('../resources/pets.json')
        pets.push(pet)

        let data = JSON.stringify(pets);
        fs.writeFileSync('resources/pets.json', data);

        return pet.id;
    }

    // Mettre à jour un pet dans la BDD
    this.updatePet = function (id, newPet){
        let res = -1;
        let pets = require('../resources/pets.json');
        for(let i = 0; i < pets.length; i++){
            if(pets[i].id === id){
                pets[i].type = newPet.type;
                pets[i].genre = newPet.genre;
                res = pets[i];
            }
        }

        let data = JSON.stringify(pets);
        fs.writeFileSync('resources/pets.json', data);
        return res;
    }

    // Supprimer un pet de la BDD
    this.deletePet = function (id){
        let pets = require('../resources/pets.json')
        let pet = this.findByIdStore(id);
        if(pet === -1){
            return -1
        } else {
            pets.splice(pets.indexOf(pet),1)
            let data = JSON.stringify(pets);
            fs.writeFileSync('resources/pets.json', data);
            return 1
        }
    }

    // Ajouter un pet dans un store
    this.addPetToStore = function (idStore, idPet) {
        let res = -1
        let stores = require('../resources/stores.json')
        for(let i = 0; i < stores.length; i++){
            if(stores[i].id === idStore){
                stores[i].pets.push(idPet);
                res = 1
            }
        }

        let data = JSON.stringify(stores);
        fs.writeFileSync('resources/stores.json', data);
        return res
    }
}

exports.FilePersistance = FilePersistance
