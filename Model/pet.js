class Pet {
    constructor(id, name, image) {
        this.id = id;
        this.name = name;
        this.image = image
    }

    static schema = {
        properties : {
            id: {type : 'integer', format: 'int64'},
            name : { type : "string"},
            image : { type : "string"},
        }
    }
}

module.exports = Pet
