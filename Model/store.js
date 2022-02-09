class Store {
    constructor(id, name, desc) {
        this.id = id
        this.name = name
        this.desc = desc
        this.pets = []
    }

    static schema = {
        properties: {
            id: {type : 'integer', format: 'int64'},
            name : { type : "string"},
            desc : { type : "string"},
            pets: {
                type: "array",
                items: {
                    type: "integer",
                    format: "int64",
                    description: "pets id"
                }
            }
        }
    }
}

module.exports = Store
