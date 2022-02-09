class Pet {
    constructor(id,name,desc) {
        this.id = id;
        this.name = name;
        if(desc) this.description = desc;
        else this.description = '';
    }

    static schema = {
        properties: {
            id: {type: 'integer', format: 'int64'},
            name: {type: 'string'},
            description: {type: 'array'}
        }
    }
}

module.exports = Pet