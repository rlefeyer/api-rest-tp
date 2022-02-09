class Pets{
    constructor(id, name, photourls, category, status) {
        this.id = id;
        this.name = name;
        this.photourls = photourls;
        this.category = category;
        this.status = status
    }
    static schema = {
        properties:{
            id: {type: "integer", format:"int64","required":true},
            name:{"type":"string","required":true},
            photourls:{
                "type":"array",
                "items":[{}]
            },
            category:{
                "type":"string"
            },
            status:{
                "type":"string"
            }
        }
    }
}

module.exports = Pets;