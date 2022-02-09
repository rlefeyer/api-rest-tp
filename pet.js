class Pet{
    constructor(id, name, status, category) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.status = status;
    }
    static schema = {
        properties:{
            id: {type: "integer", format:"int64"},
            name:{"type":"string"},
            category:{"type":"string"},
            status:{"type":"string"}
        }
    }
}

module.exports = Pet;