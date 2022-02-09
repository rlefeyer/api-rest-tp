class Store {
    constructor(id,name,desc, pets) {
        this.id = id;
        this.name = name;
        if(desc) this.description = desc;
        else this.description = '';
        if(pets) this.pets = pets;
        else this.pets = [];
    }

    static schema = {
        properties: {
            id: {type: 'integer', format: 'int64'},
            name: {type: 'string'},
            description: {type: 'string'},
            pets: {type: 'array'}
        }
    }

}


module.exports = Store;
