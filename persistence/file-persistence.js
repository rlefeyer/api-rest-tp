const fs = require('fs');

 FilePersistance = function() {

    this.findAllStores = function() {
        return require('../ressources/stores.json');
    }

    this.createStore = function(store) {

        let stores = require('../ressources/stores.json');
        stores.push(store);
        let data = JSON.stringify(stores);
        fs.writeFileSync('./ressources/stores.json', data);
    
        return store.id;
    
    }
    this.DeleteStore = function(id) {

        let stores = require('../ressources/stores.json');
        var store = stores.find( store => store.id == id)
        stores.splice(stores.indexOf(store), 1)
        let data = JSON.stringify(stores);
        fs.writeFileSync('./ressources/stores.json', data);
    
        return store.id;
    
    }

    this.findStoreById = function(id) {
        
        let stores = require('../ressources/stores.json');
        var store = stores.find( store => store.id == id)
       
    
        return store;
    
    }

    this.updateStore = function(store) {
        
        this.DeleteStore(store.id);
        this.createStore(store)
    }

    this.findAllPets = function() {
        return require('../ressources/pets.json');
    }

    this.createPet = function(pet) {
        let pets = require('../ressources/pets.json');
        pets.push(pet);
        let data = JSON.stringify(pets);
        fs.writeFileSync('ressources/pets.json', data);
    
        return pet.id;
    
    }
    this.findPetId = function(id) {
        
        let pets = require('../ressources/pets.json');
        var pet = pets.find( pet => pet.id == id)
       
    
        return pet;
    
    }

    this.DeletePet = function(id) {

        let pets = require('../ressources/pets.json');
        var pet = pets.find( pet => pet.id == id)
        pets.splice(pets.indexOf(pet), 1)
        let data = JSON.stringify(pets);
        fs.writeFileSync('ressources/pets.json', data);
    
        return pet.id;
    
    }

    this.updatePet = function(pet) {
        
        this.DeletePet(pet.id);
        this.createPet(pet)
    }



}

exports.FilePersistance = FilePersistance

