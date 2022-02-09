const fs = require('fs');
const Store = require("../models/store");
const stores = require("../resources/stores.json");

FilePersistence = function (){

    this.findAllStores = function (){
        let stores = require('../resources/stores.json');
        stores.forEach(store => {
            let tmpPets = [];
            store.pets.forEach( petId => {
                tmpPets.push(this.findPetById(petId))
            })
            store.pets = tmpPets;
        })
        return stores;
    }

    this.createStore = function (store){
        let stores = require('../resources/stores.json')
        stores.push(store);
        let data = JSON.stringify(stores);
        fs.writeFileSync('resources/stores.json', data);

        return store.id;
    }

    this.findStoreById = function (id) {
        let stores = require('../resources/stores.json')

        var store = stores.find(store => store.id === id);

        return store;
    }

    this.deleteStore = function (id){
        let stores = require('../resources/stores.json');
        var store = stores.find(store => store.id === id);
        stores.splice(stores.indexOf(store),1);

        let data = JSON.stringify(stores)
        fs.writeFileSync('resources/stores.json', data);

        return stores
    }

    this.updateStore = function(id, newName, pets){
        res = '';
        let stores = require('../resources/stores.json')

        stores.forEach( store => {
            if(store.id === id){
                store.name = newName;
                if(pets) {
                    pets.forEach( pet => {
                        store.pets.push(pet)
                    })
                }
                res = store;
            }
        })

        return res;
    }
    /* Stores */

    /* Pets */
    this.findAllPets = function (){
        let pets = require('../resources/pets.json');
        return pets;
    }

    this.createPet = function (pet){
        let pets = require('../resources/pets.json')
        pets.push(pet);
        let data = JSON.stringify(pets);
        fs.writeFileSync('resources/pets.json', data);

        return pet.id;
    }

    this.findPetById = function (id) {
        let pets = require('../resources/pets.json')

        var pet = pets.find(pet => pet.id === id);

        return pet;
    }

    this.deletePet = function (id){
        let pets = require('../resources/pets.json');
        var pet = pets.find(pet => pet.id === id);
        pets.splice(pets.indexOf(pet),1);

        let data = JSON.stringify(pets)
        fs.writeFileSync('resources/pets.json', data)

        return pets;
    }

    this.updatePet = function(id, newName){
        res = '';
        let pets = require('../resources/pets.json')

        pets.forEach( pet => {
            if(pet.id === id){
                pet.name = newName;
                res = pet;
            }
        })

        return res;
    }
    /* Pets */

}

exports.FilePersistence = FilePersistence;