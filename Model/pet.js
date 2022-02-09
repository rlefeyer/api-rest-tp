// Objet
class Pet {
    // Constructeur
    constructor(id, type, genre, image) {
        this.id = id;
        this.type = type;
        this.genre = genre
        this.image = image
    }

    // Schéma pour Swagger
    static schema = {
        properties : {
            id: {type : 'integer', format: 'int64'},
            type : { type : "string"},
            genre : { type : "string"},
        }
    }
}

module.exports = Pet
