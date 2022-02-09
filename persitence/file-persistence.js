const fs = require('fs');

FilePersistence = function() {

    this.findAllpets = function() {
        let pets = require('../resources/pets.json');
        return pets;
    };

    this.createpet = function(pet) {
        let pets = require('../resources/pets.json');
        pets.push(pet);
        fs.writeFileSync('./resources/pets.json', JSON.stringify(pets));
        return pet.id;
    }

    this.deletepet = function(pet) {
        let pets = require('../resources/pets.json');
        pets.pop(pet);
        fs.writeFileSync('./resources/pets.json', JSON.stringify(pets));
    }
};

exports.FilePersistence = FilePersistence;