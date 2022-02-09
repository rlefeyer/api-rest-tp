let FilePersistence = require('../persistence/file-persistance').FilePersistance
let filePersistence = new FilePersistence()
const Pet = require("../Model/pet");
const axios = require("axios");

PetService = function(){
    this.findAll = function () {
        return filePersistence.findAllPets()
    }

    this.findById = function(id){
        return filePersistence.findByIdPet(id)
    }

    this.createPet = function (id, name) {
        axios.get('https://random.dog/woof.json')
            .then(response => {
                let pet = new Pet(id, name, response.data.url);
                filePersistence.createPet(pet);
            })
            .catch(error => console.log(error))
    }

    this.updatePet = function (id, name) {
        let pet = new Pet(id, name);
        return filePersistence.updatePet(id, pet)
    }

    this.deletePet = function (id) {
        return filePersistence.deletePet(id)
    }
}

exports.PetService = PetService
