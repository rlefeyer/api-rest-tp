class Store{
    constructor(id,name, desc) {
        this.id = id;
        this.name = name;
        this.desc = desc;
    }

    static schema = {
        properties: {
            id: { type: "integer", format: "int64" },
            name: { "type": "string" },
            desc: { "type": "string" },
        }
    }

}

module.exports = Store;