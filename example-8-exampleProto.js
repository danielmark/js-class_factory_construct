//Example setPrototypeOf x __proto__
/**
 * Example with setPrototypeOf
 * 
 */
const personSetPrototypeOf = {
    _yearsOld: 0,
    
    get yearsOld(){
        return this._yearsOld
    },

    set yearsOld(_yearsOld){
        this._yearsOld = _yearsOld
    },

    calcAgeBirthday () {
        datenow = new Date();
        return datenow.getFullYear() - this._yearsOld
    }
}

const grandfather = {
    name: "Loius",
    calcAgeBirthday(){
        return super.calcAgeBirthday()
    }
}
Object.setPrototypeOf(grandfather,personSetPrototypeOf)

grandfather.yearsOld =92
console.log(grandfather.calcAgeBirthday());

/**
 * Example with __proto__ old syntax
 * 
 *  */
const personProto = {
    _yearsOld: 0,
    country: "Brazil",

    showCountry(){
        console.log("Live in "+this.country);
    },
    
    get yearsOld(){
        return this._yearsOld
    },

    set yearsOld(_yearsOld){
        this._yearsOld = _yearsOld
    },

    calcAgeBirthday () {
        datenow = new Date();
        return datenow.getFullYear() - this._yearsOld
    }
}

const grandFather = {
    name: "Louis",
    __proto__:personProto
}

grandFather.yearsOld = 92
console.log(grandFather.calcAgeBirthday())