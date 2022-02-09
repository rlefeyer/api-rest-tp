const Store = require("../Model/store");
const fs = require("fs");
let FilePersistence = require('../persistence/file-persistance').FilePersistance
let filePersistence = new FilePersistence()

StoreService = function(){
    this.stores = []

    this.findAll = function(){
        return this.stores
    }

    this.create = function(id, name){
        let store = new Store(id, name);
        this.stores.push(store);

        return store.id;
    }

    this.findById = function(id){
        let res = -1
        this.stores.forEach(store =>{
            if(store.id === id) res = store
        })
        return res;
    }

    this.patchStore = function(id, name){
        console.log(id)
        let res = -1;
        this.stores.forEach(store =>{
            if(store.id === id) {
                store.name = name;
                res = store;
            }
        })
        return res;
    }

    this.deleteStore = function(id){
        let store = this.findById(id);

        if(store === -1){
            return -1
        } else {
            this.stores.splice(this.stores.indexOf(store),1)
        }
    }
}

exports.StoreService = StoreService
