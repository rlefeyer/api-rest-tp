const stores = require("../resources/stores.json");
const fs = require("fs");
const Store = require("../models/store");
const FilePersistence = require('../persistence/file-persistence').FilePersistence
const filePersistence = new FilePersistence();
const axios = require('axios')
const {response} = require("express");


StorePersistenceService = function (){
    this.findAll= function (){
        var stores = filePersistence.findAllStores();
        return stores;
    }

    this.findById = function (id){
        var store = filePersistence.findStoreById(id)

        return store;
    }

    this.create = function (id,name,arrayOfPets) {
        axios.get('https://loripsum.net/api/1/short')
            .then(res => {
                var store = new Store(id,name, res.data, (arrayOfPets ? arrayOfPets : ''));
                filePersistence.createStore(store);
            })
        return id;
    }

    this.delete = function (id){
        var store = filePersistence.deleteStore(id);
    }

    this.update = function (id, newName, pets){
        var store = filePersistence.updateStore(id, newName, pets);
        return store;
    }
}

exports.StorePersistenceService = StorePersistenceService;