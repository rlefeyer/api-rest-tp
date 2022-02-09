const Pet = require('./pet')
var FilePersistance = require('../persistence/file-persistence').FilePersistance;
var filePersistance = new FilePersistance()
const axios = require('axios');

 
 let PetService = function(){
 

    this.findAllPets = function() {
        var pets = filePersistance.findAllPets();
        return pets
    }

    this.createPet = function(id, name) {
        axios.get('https://random.dog/woof.json').then(response => {
            var pet = new Pet(id, name, response.data.url);
            filePersistance.createPet(pet)
        })

        return id;
    }
    this.findPetById = function(id){
        return filePersistance.findPetId(id) 
    }

    this.editPet = function(id, name) {
        
        var pet = filePersistance.findPetId(id)
        pet.name = name
        filePersistance.updatePet(pet)
        return pet;
    }

    this.deletePet = function(id){
        
        var idPetDelete = filePersistance.DeletePet(id)
        
        return idPetDelete
    }
  
}

exports.PetService = PetService
