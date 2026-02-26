function tataCar (chassisNumber,ModelNumber){
    this.chassisNumber=chassisNumber
    this.ModelNumber =ModelNumber;
    this.fullevel = 100;


}
tataCar.prototype.status=function(){
    return`Tata ${this.ModelNumber} # ${this.chassisNumber} | FueL :${this.fullevel}`
}
const car1 =new tataCar("MH-101" ,"Nexox")
const car2 =new tataCar("DL-202" ,"Harrier")
console.log(car1.ModelNumber)
console.log(car2.ModelNumber)
console.log(car1.status())
console.log(car2.status())

// Factory Function

function createAutoRickshaw(id,routed){
    return{
        id,
        routed,
        run(){
            return`Auto ${this.id} rouning on: ${this.routed}`
        }
    }
}
const auto1 = createAutoRickshaw("UP-1","Dehli-Bareilly")
const auto2 = createAutoRickshaw("UP-2","Agra-Bareilly")
console.log(auto1.run())
console.log(auto2.run())

// Explainx more ok bro 


// =====================================================
// Constructor Function
// =====================================================

function tataCar(chassisNumber, ModelNumber){

    this.chassisNumber = chassisNumber;

    this.ModelNumber = ModelNumber;

    this.fullevel = 100;

}

/*
Explanation:

Ye constructor function hai

this refers to new object

new keyword use karne par:

new empty object create hota hai
this us object ko refer karta hai
*/



// =====================================================
// Prototype method
// =====================================================

tataCar.prototype.status = function(){

    return `Tata ${this.ModelNumber} # ${this.chassisNumber} | Fuel : ${this.fullevel}`

}

/*
Explanation:

prototype use hota hai shared methods create karne ke liye

Ye method sab objects share karenge

Memory efficient
*/




// =====================================================
// Object creation using new keyword
// =====================================================

const car1 = new tataCar("MH-101", "Nexon");

const car2 = new tataCar("DL-202", "Harrier");


console.log(car1.ModelNumber);

console.log(car2.ModelNumber);

console.log(car1.status());

console.log(car2.status());

/*
Explanation:

new tataCar() creates new object

car1 and car2 separate objects hain
but status method shared hai
*/




// =====================================================
// Factory Function
// =====================================================

function createAutoRickshaw(id, routed){

    return{

        id,

        routed,

        run(){

            return `Auto ${this.id} running on: ${this.routed}`

        }

    }

}

/*
Explanation:

Factory function object return karta hai

No new keyword required
*/




const auto1 = createAutoRickshaw("UP-1", "Delhi-Bareilly");

const auto2 = createAutoRickshaw("UP-2", "Agra-Bareilly");


console.log(auto1.run());

console.log(auto2.run());

// PART 2️⃣ — FULL CONCEPT (Constructor, Prototype, Factory, new keyword)

// =====================================================
// 1️⃣ Constructor Function
// =====================================================

function UserAccount(userId, userName){

    this.userId = userId;

    this.userName = userName;

    this.isLoggedIn = false;

}

/*
Constructor function naming convention:

First letter Capital
*/




// =====================================================
// Prototype Method
// =====================================================

UserAccount.prototype.login=function(){

    this.isLoggedIn=true;

    return `${this.userName} logged in`;

}




// =====================================================
// Creating objects
// =====================================================

const user1=new UserAccount("U101","Devesh");

const user2=new UserAccount("U102","Rahul");


console.log(user1.login());

console.log(user2.login());




// =====================================================
// How new keyword works internally
// =====================================================

/*
Step 1 → new empty object created

Step 2 → this points to new object

Step 3 → prototype linked

Step 4 → object returned
*/




// =====================================================
// Factory Function
// =====================================================

function createUser(userId,userName){

    return{

        userId,

        userName,

        login(){

            return `${this.userName} logged in`;

        }

    }

}

const factoryUser=createUser("U201","Admin");

console.log(factoryUser.login());




// =====================================================
// Prototype memory advantage
// =====================================================

function Car(model){

    this.model=model;

}

Car.prototype.start=function(){

    return `${this.model} started`;

}

const carA=new Car("Nexon");

const carB=new Car("Harrier");

console.log(carA.start());

console.log(carB.start());




// =====================================================
// Check prototype link
// =====================================================

console.log(carA.__proto__===Car.prototype);




// =====================================================
// Modern alternative: class
// =====================================================

class Bike{

    constructor(name){

        this.name=name;

    }

    start(){

        return `${this.name} started`;

    }

}

const bike1=new Bike("Royal Enfield");

console.log(bike1.start());

// Constructor vs Factory Function Difference
// Constructor Function:

// Uses new keyword

// Uses prototype

// Memory efficient



// Factory Function:

// No new keyword

// Creates new method every time

// More simple

// Real Project Use

// Constructor used in:
// User systems

// Car systems

// Game characters

// Database models
Factory used in:
API response creators

Object builders

Configuration creators

Interview Questions

Example question:
function User(name){

 this.name=name;

}

const u=new User("Devesh")
Question:

Where login method stored?

Answer:
User.prototype

FINAL SUMMARY
Constructor → create object using new

Prototype → shared methods

Factory → returns object

new keyword → creates object automatically