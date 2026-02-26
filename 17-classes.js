class Cricketer{
    constructor(name,role){
        this.name=name
        this.role=role
        this.matchPlayed =0
        this.stamina=100

    }
    introduce(){
        return`${this.name} the ${this.role} | matchesPlayed:${this.matchPlayed} stamina:${this.stamina}`
    }
}

const player1 = new Cricketer("Virat","Batsman")
const player2 = new Cricketer("Bumrah","Bowler")

console.log(player1.hasOwnProperty("name"))
console.log(typeof Cricketer)

class Debutant{
    constructor(name){
        this.name=name
        this.walkOut =() =>`${this.name} walks out to bat for the first time`
    }
}

const debutant1 = new Debutant("Shubman")
const somethingFromlastclass = debutant1.walkOut

const debutant2 = new Debutant("Yashasvi")
console.log(debutant1.walkOut === debutant2.walkOut)

// console.log(somethingFromlastclass())


// =====================================================
// YOUR CLASS: Cricketer
// =====================================================

class Cricketer{

    constructor(name,role){

        this.name=name

        this.role=role

        this.matchPlayed=0

        this.stamina=100

    }

    introduce(){

        return `${this.name} the ${this.role} | matchesPlayed:${this.matchPlayed} stamina:${this.stamina}`

    }

}

/*
Explanation:

class Cricketer → blueprint hai object create karne ke liye

constructor() → automatically run hota hai jab new object create hota hai

this.name → object property

introduce() → prototype method hai (shared method)
*/




// =====================================================
// Creating objects
// =====================================================

const player1=new Cricketer("Virat","Batsman")

const player2=new Cricketer("Bumrah","Bowler")


console.log(player1.hasOwnProperty("name"))

/*
Output: true

Explanation:

name direct property hai player1 ki
*/




// =====================================================
// typeof class
// =====================================================

console.log(typeof Cricketer)

/*
Output: function

Explanation:

class internally function hota hai JavaScript mein
*/




// =====================================================
// Second class example
// =====================================================

class Debutant{

    constructor(name){

        this.name=name

        this.walkOut=()=>`${this.name} walks out to bat for the first time`

    }

}

const debutant1=new Debutant("Shubman")

const debutant2=new Debutant("Yashasvi")


console.log(debutant1.walkOut===debutant2.walkOut)

/*
Output: false

Explanation:

Arrow function constructor ke andar define hai

So each object gets its own copy

Memory inefficient
*/




// =====================================================
// Important difference
// =====================================================

/*

Cricketer introduce()

stored in prototype

shared by all objects


Debutant walkOut()

stored inside constructor

NOT shared

separate copy for each object

*/


// COMPILER 2️⃣ — FULL CLASS CONCEPT (Complete chain flow + interview + real project)


// =====================================================
// 1️⃣ Basic Class
// =====================================================

class User{

    constructor(id,name){

        this.id=id

        this.name=name

    }

    login(){

        return `${this.name} logged in`

    }

}

const user1=new User(101,"Devesh")

console.log(user1.login())




// =====================================================
// 2️⃣ Prototype chain flow
// =====================================================

/*

user1

↓

User.prototype

↓

Object.prototype

↓

null

*/




// =====================================================
// Check prototype link
// =====================================================

console.log(user1.__proto__===User.prototype)




// =====================================================
// 3️⃣ Method shared via prototype
// =====================================================

class Car{

    constructor(model){

        this.model=model

    }

    start(){

        return `${this.model} started`

    }

}

const car1=new Car("Nexon")

const car2=new Car("Harrier")

console.log(car1.start())

console.log(car2.start())




// =====================================================
// 4️⃣ Inheritance (VERY IMPORTANT)
// =====================================================

class Player{

    constructor(name){

        this.name=name

    }

    play(){

        return `${this.name} plays`

    }

}

class Cricketer extends Player{

    constructor(name,role){

        super(name)

        this.role=role

    }

    introduce(){

        return `${this.name} is ${this.role}`

    }

}

const p1=new Cricketer("Virat","Batsman")

console.log(p1.play())

console.log(p1.introduce())




// =====================================================
// Prototype chain in inheritance
// =====================================================

/*

p1

↓

Cricketer.prototype

↓

Player.prototype

↓

Object.prototype

↓

null

*/




// =====================================================
// 5️⃣ Static method
// =====================================================

class MathUtil{

    static add(a,b){

        return a+b

    }

}

console.log(MathUtil.add(10,20))




// =====================================================
// 6️⃣ Private property
// =====================================================

class BankAccount{

    #balance=0

    deposit(amount){

        this.#balance+=amount

        return this.#balance

    }

}

const acc=new BankAccount()

console.log(acc.deposit(1000))




// =====================================================
// 7️⃣ Getter and Setter
// =====================================================

class Person{

    constructor(name){

        this._name=name

    }

    get name(){

        return this._name

    }

    set name(value){

        this._name=value

    }

}

const person1=new Person("Devesh")

person1.name="Rahul"

console.log(person1.name)




// =====================================================
// 8️⃣ Real Project Example
// =====================================================

class Order{

    constructor(orderId,amount){

        this.orderId=orderId

        this.amount=amount

    }

    process(){

        return `Order ${this.orderId} processed`

    }

}

const order1=new Order("ORD101",500)

console.log(order1.process())




// =====================================================
// 9️⃣ class vs constructor function
// =====================================================

function OldUser(name){

    this.name=name

}

OldUser.prototype.login=function(){

    return `${this.name} logged in`

}

const oldUser=new OldUser("Legacy")

console.log(oldUser.login())




// =====================================================
// 10️⃣ Check class type
// =====================================================

console.log(typeof User)

/*
Output: function
*/


// REAL PROJECT USE

// Used in:


// User system (Login/Register)

// Game characters

// Order system

// Banking system

// React components

// Backend models