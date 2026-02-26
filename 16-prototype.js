const prithvraj = {
    name: "Prithvraj",
    generation: "grandFather",
    cookTraditiondish() {
        return `${this.name} cooks an ancient family recipe`
    }
}

const raj = Object.create(prithvraj)
raj.name = "Raj"
raj.generation = "Father"

raj.runBusiness = function () {
    return `${this.name} runs the family Business`
}

console.log(raj.runBusiness())
console.log(raj.cookTraditiondish())

const ranbir = Object.create(raj)

ranbir.name = "Ranbir"
ranbir.generation = "son"

ranbir.makeFilm = function () {
    return `${this.name} directs blockbuster movies`
}

console.log(ranbir.makeFilm())
console.log(ranbir.cookTraditiondish())
console.log(ranbir.runBusiness())

// Array prototype extend
Array.prototype.last = function () {
    return this[this.length - 1]
}

console.log([1, 2, 3].last())

// add custom property
Array.prototype.hitesh = "hitesh"

console.log([1,2,3].hitesh)

// String prototype extend
String.prototype.upperCaseCustom = function () {
    return this.toUpperCase()
}

console.log("devesh".upperCaseCustom())







// =====================================================
// Base Object (Grandfather)
// =====================================================

const prithvraj = {

    name: "Prithvraj",

    generation: "grandFather",

    cookTraditiondish() {

        return `${this.name} cooks an ancient family recipe`

    }

}

/*
Explanation:

Ye base object hai

Isme method hai:

cookTraditiondish()

Ye prototype banega next objects ka
*/




// =====================================================
// Create child object using Object.create()
// =====================================================

const raj = Object.create(prithvraj)

raj.name = "Raj"

raj.generation = "Father"

raj.runBusiness = function(){

    return `${this.name} runs the family Business`

}


console.log(raj.runBusiness())

console.log(raj.cookTraditiondish())

/*
Explanation:

raj inherits from prithvraj

raj has access to:

runBusiness() → own method

cookTraditiondish() → inherited method
*/




// =====================================================
// Create next generation object
// =====================================================

const ranbir = Object.create(raj)

ranbir.name = "Ranbir"

ranbir.generation = "son"

ranbir.makeFilm = function(){

    return `${this.name} directs blockbuster movies`

}

console.log(ranbir.makeFilm())

console.log(ranbir.cookTraditiondish())

console.log(ranbir.runBusiness())

/*
Explanation:

Prototype chain:

ranbir → raj → prithvraj → Object.prototype

ranbir can access all methods
*/




// =====================================================
// Extend Array prototype
// =====================================================

Array.prototype.last=function(){

    return this[this.length-1]

}

console.log([1,2,3].last())

/*
Explanation:

Custom method added to Array prototype

Now all arrays can use last()
*/




// =====================================================
// Add custom property to Array prototype
// =====================================================

Array.prototype.hitesh="hitesh"

console.log([1,2,3].hitesh)

/*
Explanation:

All arrays inherit this property
*/




// =====================================================
// Extend String prototype
// =====================================================

String.prototype.upperCaseCustom=function(){

    return this.toUpperCase()

}

console.log("devesh".upperCaseCustom())

/*
Explanation:

Custom method added to String prototype
*/


PART 2️⃣ — FULL PROTOTYPE CONCEPT

// =====================================================
// Prototype inheritance basic example
// =====================================================

const animal={

    eat(){

        return "Animal eats food"

    }

}

const dog=Object.create(animal)

dog.bark=function(){

    return "Dog barks"

}

console.log(dog.eat())

console.log(dog.bark())




// =====================================================
// Prototype chain structure
// =====================================================

/*

dog
 ↑
animal
 ↑
Object.prototype
 ↑
null

*/




// =====================================================
// Constructor prototype example
// =====================================================

function User(name){

    this.name=name

}

User.prototype.login=function(){

    return `${this.name} logged in`

}

const user1=new User("Devesh")

console.log(user1.login())




// =====================================================
// Check prototype
// =====================================================

console.log(user1.__proto__===User.prototype)




// =====================================================
// All objects inherit from Object.prototype
// =====================================================

console.log(user1.toString())




// =====================================================
// Custom prototype method
// =====================================================

Object.prototype.customMethod=function(){

    return "Available in all objects"

}

const testObj={}

console.log(testObj.customMethod())




// =====================================================
// Prototype lookup mechanism
// =====================================================

const parent={

    greet(){

        return "Hello"

    }

}

const child=Object.create(parent)

console.log(child.greet())




// =====================================================
// Modern alternative: class
// =====================================================

class Person{

    constructor(name){

        this.name=name

    }

    greet(){

        return `${this.name} says hello`

    }

}

const p1=new Person("Devesh")

console.log(p1.greet())



// Prototype Chain Flow (VERY IMPORTANT)

ranbir

↓

raj

↓

prithvraj

↓

Object.prototype

↓

null
Real Project Use

Used in:
Inheritance

Class systems

React internal working

JavaScript engine internals
Interview Questions

Example:
const obj={}
Question:

Does obj have toString()?

Answer:

Yes, inherited from Object.prototype

FINAL SUMMARY

Object.create() → create inheritance

prototype → shared methods

prototype chain → lookup system

Array.prototype → extend arrays

String.prototype → extend strings