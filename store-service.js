const Store = require('./store')
var FilePersistance = require('./persistence/file-persistence').FilePersistance;
var filePersistance = new FilePersistance()
const axios = require('axios');

 
 let StoreService = function(){
 

    this.findAll = function() {
        var stores = filePersistance.findAllStores();
        return stores
    }
    
    this.create = function(id, name) {
        axios.get('https://loripsum.net/api/1/short').then(response => {
            var store = new Store(id, name, response.data);
            filePersistance.createStore(store)
        })

        return id;
    }

   
    this.findById = function(id){
        var store = filePersistance.findStoreById(id)
        return store
    }
    this.deleteStore = function(id){
        
        var idStoreDelete = filePersistance.DeleteStore(id)
        
        return idStoreDelete
    }
    this.editStore = function(id, name) {
        
        var store = filePersistance.findStoreById(id)
        store.name = name
        filePersistance.updateStore(store)
        return store;
    }
    
}

exports.StoreService = StoreService
