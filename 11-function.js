console.log(brewPostion("Healing Heros", 3))
function brewPostion(ingredient, dose) {
    return `Browing postion with ${ingredient} and (x${dose}) ...Postio ready..`
}

const mixElixir = function (ingredient) {
    return `Mixing exlixer with ${ingredient}`
}
console.log(mixElixir("Data"))


// what is diff bw argument nad argument object
// no own 'this'
const disdata = (ingredient) => {
    return `Mixing data ${ingredient}`
}
console.log(disdata("Kuch Data ha"))

function oldBrewingLogs() {
    console.log("Type :", typeof arguments)
    console.log("Array :", Array.isArray(arguments))
    const agrs = Array.from(arguments)
    console.log("Array :", Array.isArray(arguments))
    console.log(arguments)
    console.log(agrs)

}
oldBrewingLogs("Sage", "Rosemary")



// const arrowBro =()=>{
//    try {
//      console.log(arguments)
    
//    } catch (err) {
  
//     console.log(err.message)
//    }
// }
// arrowBro()

let globalCount =0
function broCode(name){
    globalCount++;
}
broCode()


function anothernameFunction(broCode){
    return function newCode(){
        // Do Something

    }
}

// What is High order function
// IIFE
// () ()
const postionBro = (function () {})()

const postionShop =(function (){
    let inventory =0;

    return {
        brew(){
            inventory++;
            return `Brew Postion #${inventory}`
        },
        getStock(){
            return inventory;

        },
    }
})
console.log(postionShop)
console.log(postionShop.brew())
console.log(postionShop.ingredient)

//  What is closures
// =====================================================
// 1️⃣ Function Declaration (Hoisting works)
// =====================================================

console.log(brewPostion("Healing Heros", 3))

function brewPostion(ingredient, dose) {
    return `Browing postion with ${ingredient} and (x${dose}) ...Postio ready..`
}

/*
Explanation:

Ye Function Declaration hai

IMPORTANT:
Function Declaration hoisted hota hai

Isliye function niche likha hone ke baad bhi
upar call ho gaya
*/




// =====================================================
// 2️⃣ Function Expression
// =====================================================

const mixElixir = function (ingredient) {
    return `Mixing exlixer with ${ingredient}`
}

console.log(mixElixir("Data"))

/*
Explanation:

Ye Function Expression hai

Isme hoisting nahi hoti

Function variable ke andar stored hai
*/




// =====================================================
// 3️⃣ Arrow Function
// =====================================================

const disdata = (ingredient) => {
    return `Mixing data ${ingredient}`
}

console.log(disdata("Kuch Data ha"))

/*
Explanation:

Ye Arrow function hai

Short syntax
Modern JavaScript mein use hota hai
*/




// =====================================================
// 4️⃣ arguments object
// =====================================================

function oldBrewingLogs() {

    console.log("Type :", typeof arguments)

    console.log("Array :", Array.isArray(arguments))

    const agrs = Array.from(arguments)

    console.log("Converted Array :", agrs)

}

oldBrewingLogs("Sage", "Rosemary")

/*
Explanation:

arguments object:

Contains all passed arguments

BUT:

arguments array nahi hota

Convert karne ke liye:

Array.from(arguments)
*/




// =====================================================
// 5️⃣ Arrow function has no arguments object
// =====================================================

// Arrow function me arguments nahi hota




// =====================================================
// 6️⃣ Global variable example
// =====================================================

let globalCount = 0

function broCode(name){

    globalCount++;

}

broCode()

/*
Explanation:

globalCount global variable hai

Function use modify kar raha hai
*/




// =====================================================
// 7️⃣ Higher Order Function
// =====================================================

function anothernameFunction(broCode){

    return function newCode(){

        console.log("Higher Order Function executed")

    }

}

/*
Explanation:

Function returning another function

called Higher Order Function
*/




// =====================================================
// 8️⃣ IIFE (Immediately Invoked Function)
// =====================================================

const postionBro = (function () {})()

/*
Explanation:

Function immediately run ho gaya
*/




// =====================================================
// 9️⃣ Closure Example
// =====================================================

const postionShop =(function (){

    let inventory = 0;

    return {

        brew(){

            inventory++;

            return `Brew Postion #${inventory}`

        },

        getStock(){

            return inventory;

        },

    }

})

console.log(postionShop)

/*
Explanation:

Ye closure create kar raha hai

inventory private variable hai
*/




// =====================================================
// ERROR in your code
// =====================================================

console.log(postionShop.brew())

/*
ERROR:

postionShop is function

Call this instead:

postionShop().brew()
*/






// ALL FUNCTION CONCEPTS COMPLETE

// =====================================================
// 1️⃣ Function Declaration
// =====================================================

function loginUser(username){

    return `Welcome ${username}`

}

loginUser("Devesh")




// =====================================================
// 2️⃣ Function Expression
// =====================================================

const logoutUser = function(){

    return "User logged out"

}




// =====================================================
// 3️⃣ Arrow Function
// =====================================================

const getUserRole = (role)=>{

    return role

}




// =====================================================
// 4️⃣ arguments object
// =====================================================

function sum(){

    let total = 0;

    for(let num of arguments){

        total += num;

    }

    return total;

}




// =====================================================
// 5️⃣ Rest parameter (Modern replacement of arguments)
// =====================================================

function totalSum(...numbers){

    return numbers.reduce((a,b)=>a+b)

}




// =====================================================
// 6️⃣ Higher Order Function
// =====================================================

function execute(callback){

    callback()

}

execute(()=>console.log("Executed"))




// =====================================================
// 7️⃣ Closure
// =====================================================

function counter(){

    let count = 0;

    return function(){

        count++;

        return count;

    }

}

const increment = counter();

increment();




// =====================================================
// 8️⃣ IIFE
// =====================================================

(function(){

    console.log("IIFE executed")

})();




// =====================================================
// 9️⃣ Function returning function
// =====================================================

function multiplier(x){

    return function(y){

        return x*y

    }

}

const double = multiplier(2);

double(5);




// =====================================================
// 10️⃣ Arrow function vs normal function (this)
// =====================================================

const user = {

    name:"Devesh",

    normalFunction:function(){

        console.log(this.name)

    },

    arrowFunction:()=>{

        console.log(this.name)

    }

}

user.normalFunction()

// arguments vs parameter (INTERVIEW QUESTION)
Parameter → function definition

Argument → function call

function sum(a,b) // parameter

sum(10,20) // argument

Closure (INTERVIEW QUESTION)

Closure means:
function remembers its outer variable
function outer(){

 let count=0;

 return function(){

  count++;

 }

}

Higher Order Function

Definition:
Function that takes function as argument
OR
returns function

IIFE

Definition:
Function that runs immediately

FINAL SUMMARY
Function Declaration
Function Expression
Arrow Function
arguments object
Higher Order Function
IIFE
Closures