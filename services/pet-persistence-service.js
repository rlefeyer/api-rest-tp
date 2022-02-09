const fs = require("fs");
const Pet = require("../models/Pet");
const FilePersistence = require('../persistence/file-persistence').FilePersistence
const filePersistence = new FilePersistence();
const axios = require('axios')
const {response} = require("express");


PetPersistenceService = function (){
    this.findAll= function (){
        var pets = filePersistence.findAllPets();
        return pets;
    }

    this.findById = function (id){
        var pet = filePersistence.findPetById(id)

        return pet;
    }

    this.create = function (id,name) {
        axios.get('https://random.dog/woof.json')
            .then(res => {
                var pet = new Pet(id,name, res.data);
                filePersistence.createPet(pet);
            })
        return id;
    }

    this.delete = function (id){
        var pet = filePersistence.deletePet(id);
    }

    this.update = function (id, newName){
        var pet = filePersistence.updatePet(id, newName);
        return pet;
    }
}

exports.PetPersistenceService = PetPersistenceService;