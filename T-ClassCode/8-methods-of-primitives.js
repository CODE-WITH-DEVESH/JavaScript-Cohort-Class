let str = "love is hurst"
let strClean = str.toUpperCase()
console.log(strClean)

// Number 
let million =1_000_000
let dAtom = 5e-10
let Dnucleus = 1e-15

// String 
// \n ,\t \\. \\t \'
// \n  → new line
// \t  → tab space
// \\  → backslash
// \'  → single quote

// Array 
let arr1 = new Array()
let arr2 = []

const appleTVShows =[
    "See",
    "Hijack",
    "Dev",
    "The Boys"
]
console.log(appleTVShows.at(-1))
// Array in JS is Deque ..[Stack +queue]
// Queue [FIFO] -> Push, Shift
// Stack[LIFO] => Push,pop

// Internals
// Object but Specail
// index , Value


// Loops
// for for
// for in 
// DSA Arryas .fill (true,0)


// Methods
// Splice() ,concat() 
// forEach ()


// Search --->
//  Indexof() , lastIndexof() ,Include() ,find() ,findIndex(),findLastIndex()
// Filter ()


// Transfrom
// reverse() ---> update existing arrray
// split,jion()
// sort()

// Loxicographically
function compareNumber(a,b){
    if(a>b) return 1
    if(a<b) return -1
    if(a===b) return 0

}

console.log(compareNumber.sort(( a,b) => b-a))


// JavaScript Map – Methods and Properties 
// new Map()
// map.set(key, value)
// map.get(key)
// map.has(key)
// map.delete(key)
// map.clear()
// map.size
// new Map()        → Map create karta hai
// map.set()        → key-value store karta hai
// map.get()        → key se value return karta hai
// map.has()        → key exist karti hai ya nahi check karta hai
// map.delete()     → key remove karta hai
// map.clear()      → pura map empty karta hai
// map.size         → total elements count karta hai
// map.keys()
// map.values()
// map.entries()
// map.forEach()
// WeakMap

// sets All Conpert 



// WeakMap-weakset


// All Detes


// =====================================================
// 1️⃣ Array Basics
// =====================================================

const numbers = [10,20,30]

numbers.push(40)
numbers.pop()

console.log(numbers)



// =====================================================
// 2️⃣ Array Searching
// =====================================================

const users = ["Devesh","Rahul","Aman"]

console.log(users.includes("Rahul"))
console.log(users.indexOf("Aman"))



// =====================================================
// 3️⃣ Array Transform
// =====================================================

const prices=[100,200,300]

const discounted = prices.map(p=>p*0.9)

console.log(discounted)



// =====================================================
// 4️⃣ Filter
// =====================================================

const scores=[50,80,90,40]

const passed = scores.filter(s=>s>=60)

console.log(passed)



// =====================================================
// 5️⃣ Map Data Structure
// =====================================================

const userMap = new Map()

userMap.set(1,"Devesh")
userMap.set(2,"Rahul")

console.log(userMap.get(1))
console.log(userMap.size)



// =====================================================
// 6️⃣ Set
// =====================================================

const uniqueNumbers = new Set([1,2,2,3,3,4])

console.log(uniqueNumbers)



// =====================================================
// 7️⃣ WeakMap
// =====================================================

let obj = {}

const weak = new WeakMap()

weak.set(obj,"secret")



// =====================================================
// 8️⃣ Date Object
// =====================================================

const now = new Date()

console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())



// =====================================================
// Chain Flow
// =====================================================

/*
Data Structure

↓

Array / Map / Set

↓

Store Data

↓

Transform

↓

Search

↓

Use in application
*/



// =====================================================
// Real Project Use
// =====================================================

/*

Array → API data list

Map → caching systems

Set → unique values

Date → timestamps
*/



// =====================================================
// Interview Questions
// =====================================================

/*

Q1:
Difference between Map and Object?

Answer:
Map allows any key type.

Q2:
Difference between Set and Array?

Answer:
Set stores unique values.

Q3:
What is WeakMap?

Answer:
Map with weak references.

Q4:
What does .at(-1) do?

Answer:
Returns last element.
*/



// =====================================================
// Final Summary
// =====================================================

/*

Array → ordered list

Map → key-value structure

Set → unique values

WeakMap → garbage collectible map

Date → time management

Array methods → transform and search data
*/
