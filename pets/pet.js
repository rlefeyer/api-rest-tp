class Pet {
    constructor(id, name, description){
        this.id = id;
        this.name = name;
        this.description = description;

    }

    static schema = {
        properties: {
            id: { type: "integer", format: "int64"},
            name: { "type": "string"},
           description : { "type": 'string'}
        }
    }

    
}




module.exports = Pet;