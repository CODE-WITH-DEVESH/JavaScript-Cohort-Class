const weaponName = "Flame Sword"
console.log("Weapon :", weaponName, "| type: ", typeof weaponName)

const attackPower = 75;
const attackUpgrade = 1.5;

console.log(typeof attackPower)
console.log(typeof attackUpgrade)

const isLoggedIn = true;
let bonusEffect;

let coursStatus = null;
let weatherApiRep = null;
console.log(typeof weatherApiRep)

// what is Rune

const uniqueRuneID = Symbol("fire of dev")
console.log(uniqueRuneID)
const uniqueRuneID2 = Symbol("fire of dev")
console.log(uniqueRuneID2)

// what is immutable and mutable in javascript
// primitive and non primitive data type in JavaScript

// Objects
const heroStats = {
    name: "Devesh",
    level: 12,
    class: "Reanger",

};
console.log("Hero :", heroStats, "| type:", typeof heroStats)

const names = ["Devesh", "Rahul", "Aman", "Piyush", "Hitesh"];
console.log("names :", names, "| type:", typeof names)


function greet() {
    console.log("Hello World");
};
console.log("greet :", greet, "| type:", typeof greet)
// But this is main objects

console.log(typeof "ChaiCode")
console.log(typeof 42)
console.log(typeof 42n)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof Symbol())
console.log(typeof {})
console.log(typeof [])
console.log(typeof function () { })

let originalHP = 100;
let cloneHP = originalHP
cloneHP = 80;
console.log("originalHP:", originalHP)
console.log("cloneHP: ", cloneHP)


const originalSword = {
    name: "flame sword",
    damage: 75,
    typeFW: "fire",
};

const cloneSword = originalSword
cloneSword.damage = 100;
console.log("originalSword:", originalSword)
console.log("cloneSword:", cloneSword)
originalSword.damage = 23
// console.log(originalSword)

const armorOrignal = {
    name: "Iron Plate",
    defence: 80,
    buff: {
        fire: 10
    },
}
const armorCopy = { ...armorOrignal }

armorCopy.buff.fire = 90;
console.log(armorCopy)

const postionOriginal = { name: "Health", effects: { neal: 40, mena: 30 } }
const postionCopy = structuredClone(postionOriginal)


typeof null === "object"
Array.isArray()

