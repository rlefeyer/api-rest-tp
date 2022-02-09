const fs = require('fs');
const stores = require("../resources/stores.json");
const pets = require("../resources/pets.json");
const axios = require("axios");
FilePersistance = function () {
    this.findAllStores = function () {
        return require('../resources/stores.json');
    }

    this.createStore = function (store){
        let stores = require('../resources/stores.json')
        stores.push(store);
        let data = JSON.stringify(stores);
        fs.writeFileSync('resources/stores.json', data);

        return store.id;
    }

    this.findByIdStore = function(id){
        let stores = require('../resources/stores.json')
        let res = -1
        stores.forEach(store =>{
            if(store.id === id) res = store
        })
        return res;
    }

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

    this.findAllPets = function () {
        return require('../resources/pets.json')
    }

    this.findByIdPet = function (id) {
        let pets = require('../resources/pets.json')
        let res = -1
        pets.forEach(pet =>{
            if(pet.id === id) res = pet
        })
        return res;
    }

    this.createPet = function (pet) {
        let pets = require('../resources/pets.json')
        pets.push(pet)

        let data = JSON.stringify(pets);
        fs.writeFileSync('resources/pets.json', data);

        return pet.id;
    }

    this.updatePet = function (id, newPet){
        let pets = require('../resources/pets.json')
        for(let i = 0; i < pets.length; i++){
            if(pets[i].id === id){
                pets[i].name = newPet.name;
            };
        };
        let data = JSON.stringify(pets);
        fs.writeFileSync('resources/pets.json', data);
        return newPet;
    }

    this.deletePet = function (id){
        let pets = require('../resources/pets.json')
        let pet = this.findByIdPet(id);
        if(pet === -1){
            return -1
        } else {
            pets.splice(pets.indexOf(pet),1)
            let data = JSON.stringify(pets);
            fs.writeFileSync('resources/pets.json', data);
            return 1
        }
    }
}

exports.FilePersistance = FilePersistance
