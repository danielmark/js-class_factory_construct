class DataStoreClass{
    constructor(name){
        this.name = name
    }

    showNameStore(){
        console.log(`Store name: ${this.name}`)
    }
}

function DataStoreFactory(name){
    return {
        showNameStore:() => console.log(`Store name: ${name}`)
    }
}

function DataStoreConstruct(name){
    this.name = name
    
    this.showNameStore = function(){
        console.log(`Store name: ${this.name}`)
    }
}

const storeClass = new DataStoreClass("SupermarketOne")
storeClass.showNameStore()

const storeFactory = new DataStoreFactory("SupermarketTwo")
storeFactory.showNameStore()

const storeConstruct = new DataStoreConstruct("SupermarketThree")
storeConstruct.showNameStore()

