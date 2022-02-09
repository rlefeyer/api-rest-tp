class Store{
    constructor(id, name) {
    this.id = id;
    this.name = name;
    this.pets = [];
    }
    static schema = {
        properties:{
            id: {type: "integer", format:"int64"},
            name:{"type":"string"},
            pets:{
                type:"array",
                items:{type:"integer", format:"int64", description: "pets id"}
            }
        }
    }
}

module.exports = Store;