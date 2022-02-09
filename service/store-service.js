const { default: axios } = require("axios");
const Store = require("../model/store");
const stores = require("../resources/store.json");
var FilePersistence = require('../persistence/file-persistence').FilePersistence;
var filePersistence = new FilePersistence();


StoreService = function() {

        this.stores = [];
        
        this.findAll = function() {
            var stores = filePersistence.findAllStores();
            return stores
        }

        this.create = function(id, name){
            axios.get('https://loripsum.net/api/1/short').then(response => {
                var store = new Store(id, name, response.data);
                filePersistence.createStore(store);
            })
            return id;
        }

        this.update = function(id, name) {

            var store = this.findById(id);
            store.name = name;
            filePersistence.updateStore(store);
        }

        this.findById = function(id){
            return filePersistence.findStoreId(id);
        }

        this.deleteStore = function(id){
            return filePersistence.deleteStore(id);
        }
};

exports.StoreService = StoreService;