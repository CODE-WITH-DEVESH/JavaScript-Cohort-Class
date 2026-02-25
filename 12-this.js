console.log(this)

function ranveerOnGobalStage(){
    return typeof this;
}
console.log(ranveerOnGobalStage())

function ranveerWithNoScript(){
    "use strict"
    return this;
}
console.log(ranveerWithNoScript())

function ranveerWithNoScriptAndWithoutuseing_use_strict(){
    return this;
}

console.log(ranveerWithNoScriptAndWithoutuseing_use_strict())


const bollywoodFile={
    name: "Bajirao Mastani",
    lead: "Raveer Singh",
    
    introduce(){
        return `${this.lead} pERFORMS IN ${this.name}`
    }
}

console.log(bollywoodFile.introduce())

// Interview Quations 
// yes Can you give me more 10 Qustion like this for I want more paractive this qustion

const fileDirector ={
    name:"Sanjay Lella Bhansali",
    cast:["Ranveer","Deepika" ,"Priyaka"],

    announceCast(){
        this.cast.forEach((actor)=>{
            console.log(`${this.name} introduces ${actor}`)
        })
    }
}
fileDirector.announceCast()


// Yeha Same like that this is aloso interiew Qustions so i Want more Exmple in this is Qustions and You shold give 10 best Qustions and Ans 

const fileSets ={
    crew:"SPORT BOY",

    prepareProps(){
        console.log(`Outter this. crew : ${this.crew}`)
        function arrangeChairs(){
            console.log(`Inner this. crew : ${this.crew}`)
            // Inner this. crew : undefined

        }
        arrangeChairs()

        const arrangeLigts =()=>{
            console.log(`Arrow This .crew :${this.crew}`)
        }
        arrangeLigts()
    }
}
fileSets.prepareProps()




const actor ={
    name: "Ranveer",
    bow(){
        return `${this.name} takes a bow`
    }
}
const detacgeBow =actor.bow
console.log(detacgeBow())




// =====================================================
// 1️⃣ Global this
// =====================================================

console.log(this)

/*
Explanation:

Browser → this = window object

Node.js → this = {}

Global context ka this global object hota hai
*/




// =====================================================
// 2️⃣ this inside normal function (non-strict mode)
// =====================================================

function ranveerOnGobalStage(){

    return typeof this;

}

console.log(ranveerOnGobalStage())

/*
Explanation:

Non strict mode:

this = global object

Browser → window
Node → global
*/




// =====================================================
// 3️⃣ this inside strict mode
// =====================================================

function ranveerWithNoScript(){

    "use strict"

    return this;

}

console.log(ranveerWithNoScript())

/*
Explanation:

Strict mode mein:

this = undefined
*/




// =====================================================
// 4️⃣ normal function without strict mode
// =====================================================

function ranveerWithNoScriptAndWithoutuseing_use_strict(){

    return this;

}

console.log(ranveerWithNoScriptAndWithoutuseing_use_strict())

/*
Explanation:

Non strict mode

this = global object
*/




// =====================================================
// 5️⃣ this inside object method
// =====================================================

const bollywoodFile={

    name: "Bajirao Mastani",

    lead: "Ranveer Singh",
    
    introduce(){

        return `${this.lead} performs in ${this.name}`

    }

}

console.log(bollywoodFile.introduce())

/*
Explanation:

this refers to current object

this.name → bollywoodFile.name
*/




// =====================================================
// 6️⃣ this inside arrow function in object method
// =====================================================

const fileDirector={

    name:"Sanjay Leela Bhansali",

    cast:["Ranveer","Deepika" ,"Priyanka"],

    announceCast(){

        this.cast.forEach((actor)=>{

            console.log(`${this.name} introduces ${actor}`)

        })

    }

}

fileDirector.announceCast()

/*
Explanation:

Arrow function does NOT have its own this

It uses parent this

this.name → fileDirector.name
*/




// =====================================================
// 7️⃣ this inside nested normal function vs arrow
// =====================================================

const fileSets={

    crew:"SPORT BOY",

    prepareProps(){

        console.log(`Outer this crew: ${this.crew}`)

        function arrangeChairs(){

            console.log(`Inner this crew: ${this.crew}`)

        }

        arrangeChairs()

        const arrangeLights=()=>{

            console.log(`Arrow this crew: ${this.crew}`)

        }

        arrangeLights()

    }

}

fileSets.prepareProps()

/*
Explanation:

Normal function → this lost

Arrow function → inherits this
*/




// =====================================================
// 8️⃣ detached method problem
// =====================================================

const actor={

    name: "Ranveer",

    bow(){

        return `${this.name} takes a bow`

    }

}

const detachBow=actor.bow

console.log(detachBow())

/*
Explanation:

this lost because function detached

this = global object

Fix:

detachBow.call(actor)
*/





// =====================================================
// Question 1
// =====================================================

const user1={

    name:"Devesh",

    greet(){

        console.log(this.name)

    }

}

user1.greet()

// Answer: Devesh




// =====================================================
// Question 2
// =====================================================

const greet=user1.greet

greet()

// Answer: undefined (this lost)




// =====================================================
// Question 3
// =====================================================

function test(){

    console.log(this)

}

test()

// Answer:
// global object




// =====================================================
// Question 4
// =====================================================

"use strict"

function test2(){

    console.log(this)

}

test2()

// Answer:
// undefined




// =====================================================
// Question 5
// =====================================================

const obj={

    name:"JS",

    arrow:()=>{

        console.log(this.name)

    }

}

obj.arrow()

// Answer: undefined




// =====================================================
// Question 6
// =====================================================

const obj2={

    name:"JS",

    normal(){

        console.log(this.name)

    }

}

obj2.normal()

// Answer: JS




// =====================================================
// Question 7
// =====================================================

const obj3={

    name:"JS",

    show(){

        const arrow=()=>console.log(this.name)

        arrow()

    }

}

obj3.show()

// Answer: JS




// =====================================================
// Question 8
// =====================================================

const obj4={

    name:"JS"

}

function print(){

    console.log(this.name)

}

print.call(obj4)

// Answer: JS




// =====================================================
// Question 9
// =====================================================

function User(name){

    this.name=name

}

const u=new User("Devesh")

console.log(u.name)

// Answer: Devesh




// =====================================================
// Question 10
// =====================================================

const obj5={

    name:"JS",

    show(){

        setTimeout(()=>{

            console.log(this.name)

        })

    }

}

obj5.show()

// Answer: JS


// FINAL SUMMARY (this keyword)
// Global → this = global object

// Normal function → global object (non strict)

// Strict mode → undefined

// Object method → object itself

// Arrow function → inherits parent this

// Detached function → this lost

// call/apply/bind → manually set this