const fs = require("fs");
const stores = require("../resources/stores.json");
const pets = require("../resources/pets.json");
FilePersistance = function(){

    this.findAllStores = function(){
        let stores = require('../resources/stores.json');
        return stores;
    }
    this.createStore = function(store){
        let stores = require('../resources/stores.json');
        stores.push(store);
        fs.writeFileSync('./resources/stores.json', JSON.stringify(stores))
        return store.id;
    }

    this.deleteStore = function (id) {
        let stores = require('../resources/stores.json');
        const store = stores.find(store => store.id === id);
        stores.splice(stores.indexOf(store),1);
        fs.writeFileSync('./resources/stores.json',JSON.stringify(stores))
    }

    this.updateStore = function(store){
        this.deleteStore(store.id);
        this.createStore(store);
    }

    this.createPet = function(pet){
        let pets = require('../resources/pets.json');
        pets.push(pet);
        fs.writeFileSync('./resources/pets.json', JSON.stringify(pets))
        return pet.id;
    }
    this.getPet = function(id){
        let pets = require('../resources/pets.json');
        return pets.find(pet => pet.id === id);
    }
    this.deletePet = function(id){
        let pets = require('../resources/pets.json');
        const pet = pets.find(pets => pets.id === id);
        pets.splice(pets.indexOf(pet),1);
        fs.writeFileSync('./resources/pets.json',JSON.stringify(pets))
    }

    this.updatePet = function(pet){
        this.deletePet(pet.id);
        this.createPet(pet);
    }
    this.findAllPets = function(){
        return require('../resources/pets.json');

    }
}

exports.FilePersistance = FilePersistance;