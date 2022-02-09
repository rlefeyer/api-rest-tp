class Pets{
    constructor(id,name, imageURL) {
        this.id = id;
        this.name = name;
        this.imageURL = imageURL;
    }

    static schema = {
        properties: {
            id: { type: "integer", format: "int64" },
            name: { "type": "string" },
            imageURL: { "type": "string" },
        }
    }

}

module.exports = Pets;