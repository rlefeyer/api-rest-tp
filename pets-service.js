const axios = require("axios");
const Pet = require("./pets");
const FP = require('./persistence/file-persistence').FilePersistance;
const fP = new FP();
PetsService = function(){
    this.createPet = function(pet){
        return fP.createPet(pet)
    }
    this.deletePet = function(id){
        fP.deletePet(id);
    }

    this.updatePet = function(pet){
        fP.updatePet(pet);
    }
    this.findAll = function () {
        return fP.findAllPets();
    }
    this.findPet = function(id){
        return fP.getPet(id);
    }
    this.getWoof = function(id, name){
        axios.get('https://random.dog/woof.json').then(response => {
            const pet = new Pet(id, name, response.data.toString(), "", "");
            fP.createPet(pet);
        });
        return id;
    }
}
exports.PetsService = PetsService;