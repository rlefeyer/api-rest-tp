let FilePersistence = require('../persistence/file-persistance').FilePersistance
let filePersistence = new FilePersistence()
const Pet = require("../Model/pet");
const axios = require("axios");

PetService = function(){
    // Envoyer tous les stores
    this.findAll = function () {
        return filePersistence.findAllPets()
    }

    // Envoyer la création
    this.createPet = function (id, type, genre) {
        axios.get('https://random.dog/woof.json')
            .then(response => {
                let pet = new Pet(id, type, genre, response.data.url);
                filePersistence.createPet(pet);
            })
            .catch(error => console.log(error))
        return 1
    }

    // Envoyer un pet
    this.findOnePet = function (id) {
        return filePersistence.findByIdPet(id)
    }

    // Mettre à jour un pet
    this.updatePet = function (id, type, genre) {
        let pet = new Pet(id, type, genre);
        return filePersistence.updatePet(id, pet)
    }

    // Supprimer un pet
    this.deletePet = function (id) {
        return filePersistence.deletePet(id)
    }

    // Ajouter un pet au store
    this.addPetToStore = function (idStore, idPet) {
        return filePersistence.addPetToStore(idStore, idPet);
    }
}

exports.PetService = PetService
