// Call Apply and bild

function cookDish(ingredient, style) {
    return `${this.name} Prepares ${ingredient} in ${style} style:`
}
const sharmaKitchen = { name: "Shamra ji Kitchen" }
const guptaKitchen = { name: "Gupta ji Kitchen" }

console.log(cookDish.call(sharmaKitchen, "Pneer and Spices", "Muglai"))
const guptaOrder = ["Chole Kulche", "Punjabi Dhvba"]
console.log(cookDish.apply(guptaKitchen, guptaOrder))


// Bind

function reportDeliver(location, status) {
    return `${this.name} Prepares ${location} in ${status} style:`
}
const deliverboy = { name: "ranveer" };
console.log("Call :", reportDeliver.call(deliverboy, "layar", "orders"))

console.log("Apply :", reportDeliver.apply(deliverboy, ["Mars", "pick Up"]))

// console.log("Bind:", reportDeliver.bind(deliverboy, "haridwar", "What"))

const bindReport = reportDeliver.bind(deliverboy, "haridwar", "What")
console.log(bindReport())


// =====================================================
// YOUR FUNCTION
// =====================================================

function cookDish(ingredient, style) {

    return `${this.name} Prepares ${ingredient} in ${style} style:`

}

/*
Explanation:

Ye normal function hai

this.name depends karega kis object se call hua hai
*/




// =====================================================
// call()
// =====================================================

const sharmaKitchen = { name: "Shamra ji Kitchen" }

console.log(

cookDish.call(sharmaKitchen, "Paneer and Spices", "Muglai")

)

/*
Explanation:

call() sets this manually

this = sharmaKitchen

Arguments passed individually
*/




// =====================================================
// apply()
// =====================================================

const guptaKitchen = { name: "Gupta ji Kitchen" }

const guptaOrder = ["Chole Kulche", "Punjabi Dhaba"]

console.log(

cookDish.apply(guptaKitchen, guptaOrder)

)

/*
Explanation:

apply same as call

Difference:

arguments passed in array
*/




// =====================================================
// bind()
// =====================================================

function reportDeliver(location, status) {

    return `${this.name} delivers to ${location} with ${status}`

}

const deliverboy = { name: "Ranveer" }


// call
console.log(

reportDeliver.call(deliverboy, "Delhi", "Delivered")

)


// apply
console.log(

reportDeliver.apply(deliverboy, ["Mars", "Pick Up"])

)


// bind
const bindReport = reportDeliver.bind(deliverboy, "Haridwar", "On the way")

console.log(bindReport())

/*
Explanation:

bind does NOT execute immediately

bind returns new function
*/

// PART 2️⃣ — CALL, APPLY, BIND FULL CONCEPT

// =====================================================
// BASIC FUNCTION
// =====================================================

function greetUser(role, city){

    return `${this.name} is ${role} from ${city}`

}

const user1={ name:"Devesh" }

const user2={ name:"Rahul" }




// =====================================================
// call()
// =====================================================

console.log(

greetUser.call(user1,"Admin","Delhi")

)

/*
call:

sets this
arguments passed individually
*/




// =====================================================
// apply()
// =====================================================

console.log(

greetUser.apply(user2,["Student","Mumbai"])

)

/*
apply:

sets this
arguments passed in array
*/




// =====================================================
// bind()
// =====================================================

const bindFunction=

greetUser.bind(user1,"Developer","Noida")

console.log(bindFunction())

/*
bind returns new function
*/




// =====================================================
// REAL PROJECT EXAMPLE
// =====================================================

const orderSystem={

    restaurant:"Spice Hub"

}

function processOrder(item){

    console.log(`${this.restaurant} processes ${item}`)

}

processOrder.call(orderSystem,"Pizza")




// =====================================================
// Fix lost this problem
// =====================================================

const user={

    name:"Devesh",

    show(){

        console.log(this.name)

    }

}

const detached=user.show

// fix using bind

const fixed=detached.bind(user)

fixed()




// =====================================================
// Using bind in event handlers
// =====================================================

const buttonHandler={

    name:"Submit Button",

    click(){

        console.log(this.name)

    }

}

const handler=buttonHandler.click.bind(buttonHandler)

handler()


// call vs apply vs bind DIFFERENCE (INTERVIEW QUESTION)

// call:

// function.call(this,arg1,arg2)

// Immediate execution



// apply:

// function.apply(this,[arg1,arg2])

// Immediate execution



// bind:

// function.bind(this,arg1,arg2)

// Returns new function


// Interview Question Example
const user={name:"Devesh"}

function test(){

 console.log(this.name)

}

test.call(user)


// FINAL SUMMARY

// call → immediate execution

// apply → immediate execution (array args)

// bind → returns new function

// All three used to control this