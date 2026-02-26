const aadharcard=Symbol("aadhaar")
const aadharcard_2=Symbol("aadhaar")

console.log(typeof aadharcard)
console.log(aadharcard===aadharcard_2)
console.log(aadharcard.toString())
console.log(aadharcard_2.description)

const nonIndian =Symbol()
console.log(nonIndian.description)



const biometricHash =Symbol("biometricHash")
const bloodGroup =Symbol("bloodGroup")

const citizenRecord={
    name:"Veer Pandey",
    age:21,
    [biometricHash]: "Afjhaio564",
    [bloodGroup]: "O+",
}
console.log(Object.keys(citizenRecord))

console.log(Object.getOwnPropertySymbols(citizenRecord))

console.log(Symbol())


const rtiQueryBook={
    queries:["Infra Budegt" ,"Ration Card","Education budegt","StartUp laws"],
    [Symbol.iterator] (){
        let index =0;
        const queries =this.queries
        return {
            next(){
                if(index <queries.length){
                    return {value:queries[index++],done:false}
                }
                return{value :undefined ,done:true}
            },
        };
    },
};

for(const query of rtiQueryBook){
    console.log(    `Filing RTI :${query}`)
}

const govermentSchme={
    name:"PM Kisan Yojna",
    people :54,
    [Symbol.toPrimitive](hint){
        if(hint==="string") return this.name
        if(hint==="number") return 77
    },
};
console.log(+govermentSchme)
console.log(`${govermentSchme}`)











// =====================================================
// 1️⃣ Creating Symbols
// =====================================================

const aadharcard = Symbol("aadhaar")
const aadharcard_2 = Symbol("aadhaar")

console.log(typeof aadharcard)

/*
Output:
symbol

Explanation:
Symbol is primitive data type
*/

console.log(aadharcard === aadharcard_2)

/*
Output:
false

Explanation:

Even if description same ho

Symbol always unique hota hai
*/

console.log(aadharcard.toString())

/*
Output:
Symbol(aadhaar)

Symbol ko string me convert karne ke liye use hota hai
*/

console.log(aadharcard_2.description)

/*
Output:
aadhaar

description property returns label
*/




// =====================================================
// Symbol without description
// =====================================================

const nonIndian = Symbol()

console.log(nonIndian.description)

/*
Output:
undefined

Explanation:
No description provided
*/




// =====================================================
// Using Symbol as Object Key
// =====================================================

const biometricHash = Symbol("biometricHash")
const bloodGroup = Symbol("bloodGroup")

const citizenRecord = {

    name:"Veer Pandey",

    age:21,

    [biometricHash]: "Afjhaio564",

    [bloodGroup]: "O+",

}

console.log(Object.keys(citizenRecord))

/*
Output:
["name","age"]

Explanation:
Symbol properties hidden hoti hain
*/

console.log(Object.getOwnPropertySymbols(citizenRecord))

/*
Output:
[Symbol(biometricHash), Symbol(bloodGroup)]

Explanation:
Symbol keys retrieve karne ke liye special method use hota hai
*/




// =====================================================
// Creating empty Symbol
// =====================================================

console.log(Symbol())

/*
Creates unique symbol
*/




// =====================================================
// Custom Iterator using Symbol.iterator
// =====================================================

const rtiQueryBook = {

    queries:["Infra Budget","Ration Card","Education Budget","Startup laws"],

    [Symbol.iterator]() {

        let index = 0

        const queries = this.queries

        return {

            next(){

                if(index < queries.length){

                    return {

                        value:queries[index++],

                        done:false

                    }

                }

                return {

                    value:undefined,

                    done:true

                }

            },

        }

    },

}

for(const query of rtiQueryBook){

    console.log(`Filing RTI : ${query}`)

}

/*
Explanation:

Symbol.iterator makes object iterable

for...of loop works
*/




// =====================================================
// Symbol.toPrimitive
// =====================================================

const govermentSchme = {

    name:"PM Kisan Yojna",

    people:54,

    [Symbol.toPrimitive](hint){

        if(hint==="string")

            return this.name

        if(hint==="number")

            return 77

    },

}

console.log(+govermentSchme)

/*
Output:
77

number conversion
*/

console.log(`${govermentSchme}`)

/*
Output:
PM Kisan Yojna

string conversion
*/



// COMPILER 2️⃣ — FULL SYMBOL CONCEPT (Complete)

// =====================================================
// 1️⃣ Basic Symbol
// =====================================================

const userId = Symbol("userId")

console.log(typeof userId)




// =====================================================
// 2️⃣ Symbol uniqueness
// =====================================================

const s1 = Symbol("id")

const s2 = Symbol("id")

console.log(s1 === s2)

/*
false
*/




// =====================================================
// 3️⃣ Symbol as Object key
// =====================================================

const secretKey = Symbol("secret")

const user = {

    name:"Devesh",

    [secretKey]:"123ABC"

}

console.log(user[secretKey])




// =====================================================
// 4️⃣ Symbol hidden from normal loops
// =====================================================

console.log(Object.keys(user))

console.log(Object.getOwnPropertySymbols(user))




// =====================================================
// 5️⃣ Symbol.for (global symbol)
/// =====================================================

const globalSymbol1 = Symbol.for("token")

const globalSymbol2 = Symbol.for("token")

console.log(globalSymbol1 === globalSymbol2)

/*
true
*/




// =====================================================
// 6️⃣ Symbol.iterator
// =====================================================

const numbers = {

    data:[10,20,30],

    [Symbol.iterator](){

        let i=0

        return {

            next:()=>{

                if(i<this.data.length){

                    return {

                        value:this.data[i++],

                        done:false

                    }

                }

                return {done:true}

            }

        }

    }

}

for(const n of numbers){

    console.log(n)

}




// =====================================================
// 7️⃣ Symbol.toPrimitive
// =====================================================

const price={

    amount:100,

    [Symbol.toPrimitive](){

        return this.amount

    }

}

console.log(price+50)




// =====================================================
// 8️⃣ Symbol used for private properties
// =====================================================

const passwordSymbol = Symbol("password")

const account = {

    username:"admin",

    [passwordSymbol]:"secret"

}

console.log(account[passwordSymbol])




// =====================================================
// 9️⃣ Symbol in real project
// =====================================================

const USER_ID = Symbol("USER_ID")

const userRecord = {

    name:"Devesh",

    [USER_ID]:101

}

console.log(userRecord[USER_ID])




// =====================================================
// 10️⃣ Symbol registry
// =====================================================

const symA = Symbol.for("test")

const symB = Symbol.for("test")

console.log(symA === symB)

// REAL PROJECT USE
// Private object properties

// Unique IDs

// Internal JavaScript engine features

// React internal keys

// Custom iterators