const { default: axios } = require("axios");
const Pets = require("../model/pets");
const pet = require("../resources/pets.json");
var FilePersistence = require('../persistence/file-persistence').FilePersistence;
var filePersistence = new FilePersistence();


PetsService = function() {

        this.pets = [];
        
        this.findAll = function() {
            var pets = filePersistence.findAllPet();
            return pets
        }

        this.create = function(id, name){
            axios.get('https://random.dog/woof.json').then(response => {
                var pet = new Pets(id, name, response.data);
                filePersistence.createPet(pet);
            })
            return id;
        }

        this.update = function(id, name) {

            var pet = this.findById(id);
            pet.name = name;
            filePersistence.updatePet(pet);
        }

        this.findById = function(id){
            return filePersistence.findPetId(id);
        }

        this.deletePet = function(id){
            return filePersistence.deletePet(id);
        }
};

exports.PetsService = PetsService;