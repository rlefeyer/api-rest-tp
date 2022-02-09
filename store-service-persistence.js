const Store = require("./Model/store");
const fs = require("fs");
let FilePersistence = require('./persistence/file-persistance').FilePersistance
let filePersistence = new FilePersistence()
const axios = require('axios');

StoreServicePersistence = function () {
    this.findAll = function () {
        return filePersistence.findAllStores();
    }

    this.createStore = function(id, name) {
        let store
        axios.get('https://loripsum.net/api/1/short')
            .then(response =>{
                store = new Store(id, name, response.data)
                filePersistence.createStore(store);
            })
            .catch(error => console.log(error))

        return 1
    }

    this.deleteStore = function(id){
        return filePersistence.deleteStore(id)
    }
}
exports.StoreServicePersistence = StoreServicePersistence
