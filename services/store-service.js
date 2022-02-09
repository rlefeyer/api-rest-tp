const Store = require('../models/store')

StoreService = function (){
    this.stores = [];

    this.findAll = function (){
        return this.stores;
    }

    this.create = function (id,name){
        var store = new Store(id,name);
        this.stores.push(store);

        return store.id;
    }

    this.findById = function (id) {
        var store = this.stores.find(store => store.id === id);

        return store;
    }

    this.changeStoreName = function (id, newName) {
        res = '';
        this.stores.forEach( store => {
            if(store.id === id) {
                store.name = newName;
                res = store;
            }
        })

        return res;
    }

    this.deleteStore = function(id) {
        var store = this.findById(id);
        this.stores.splice(this.stores.indexOf(store), 1)

        return this.stores;
    }

}

exports.StoreService = StoreService;