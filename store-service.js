const Store = require('./store')
const FP = require('./persistence/file-persistence').FilePersistance;
const fP = new FP();
const axios = require('axios')
const {response} = require("express");
StoreService = function (){
    this.stores = []
    this.findAll = function () {
        return fP.findAllStores();
    }
    this.create1 = function(id, name){
        const store = new Store(id, name);
        this.stores.push(store);
        return store.id;
    }
    this.create = function(id, name){
        axios.get('https://loripsum.net/api/1/short').then(response => {
            var store = new Store(id, name, response.data);
            fP.createStore(store);
        });
        return id;
    }
    this.createStore = function(store){
       fP.createStore(store)
    }
    this.deleteStore = function(id){
        fP.deleteStore(id);
    }

    this.updateStore = function(store){
        fP.updateStore(store);
    }
    this.findById = function(id){
        return this.stores.find(store => store.id === id);
    }
    this.delete = function(id){
        this.stores.splice(this.stores.find(store => store.id === id))
    }
    this.modify = function(id, name){
        this.stores.find(store => store.id === id, function (store) {
            store.name = name;
        })
    }
}

exports.StoreService = StoreService;