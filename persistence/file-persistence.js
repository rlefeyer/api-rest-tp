const fs = require('fs');

FilePersistence = function() {

    /** STORE **/
    this.findAllStores = function() {
        return require('../resources/store.json');
    }

    this.createStore = function(store) {
        let stores = require('../resources/store.json');
        stores.push(store);
        let data = JSON.stringify(stores);
        fs.writeFileSync('resources/store.json', data);
    
        return store.id;
    
    }

    this.findStoreId = function(id){
        let stores = require('../resources/store.json');
        var store = stores.find( store => store.id == id)
        return store
    }

    this.deleteStore = function(id){
        let stores = require('../resources/store.json');
        var store = stores.find(store => store.id === id);
        stores.splice(stores.indexOf(store),1);

        let data = JSON.stringify(stores)
        fs.writeFileSync('resources/store.json',data)
    }

    this.updateStore = function(store){      
        this.deleteStore(store.id);
        this.createStore(store);
    }

    /** PETS **/
    this.findAllPet = function() {
        return require('../resources/pets.json');
    }

    this.createPet = function(pet) {
        let pets = require('../resources/pets.json');
        pets.push(pet);
        let data = JSON.stringify(pets);
        fs.writeFileSync('./resources/pets.json', data);
    
        return pet.id;
    
    }

    this.findPetId = function(id){
        let pets = require('../resources/pets.json');
        return pets.find( pet => pet.id == id);        
    }

    this.deletePet = function(id){
        let pets = require('../resources/pets.json');
        var pet = pets.find(pet => pet.id === id);
        pets.splice(pets.indexOf(pet),1);

        let data = JSON.stringify(pets)
        fs.writeFileSync('resources/pets.json',data)
    }

    this.updatePet = function(pet){      
        this.deletePet(pet.id);
        this.createPet(pet);
    }
}

exports.FilePersistence = FilePersistence;