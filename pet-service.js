const pet = require('./pet');
let FilePersistence = require('./persitence/file-persistence').FilePersistence;
let filePersistence = new FilePersistence();
const fs = require('fs');
const { default: axios } = require('axios');


petService = function (){

    this.pets = []

    this.findAll = function() {
        let pets = filePersistence.findAllpets();
        return pets;
    }

    this.create = function(id, name, status){
        const pet = new pet(id, name, status);
        this.pets.push(pet);
        return pet.id;
    }

    this.findById = function(id){
        return this.pets.find(pet => pet.id === id);
    }

    this.delete = function(id){
        this.pets.splice(this.pets.find(pet => pet.id === id))
    }
    
    this.modify = function(id, name){
        this.pets.find(pet => pet.id === id, function (pet) {
            pet.name = name;
        })
    }
    this.deletepet = function(pet) {
        filePersistence.deletepet(pet.id);
    }
    
    this.createpet = function(pet) {
        filePersistence.createpet(pet)
    }

    this.updatepet = function(pet) {
        filePersistence.deletepet(pet.id);
        filePersistence.createpet(pet);
    }

    this.Woof = function(id, name) {
        axios.get('https://random.dog/woof.json').then(response => {
            const pet = new Pet(id, name, response.data.toString(), "", "");
            filePersistence.createpet(pet);
        }); 
        return id;
    }
}

exports.petService = petService;