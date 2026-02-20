const clue1 = "Muddy footprint near the windows"
const clue2 = "Broken glass on the table"

console.log("Clue found: ", clue1)
console.log("Clue found: ", clue2)

const suspectName = "Ayushi"
const suspectAge = "22"

console.log(`Suspert : ${suspectName} and age ${suspectAge}`)

console.warn("warning found")
console.error("warning found")


const students = [
    {
        name: "Devesh",
        age: 22,
        course: "MCA"
    },
    {
        name: "Rahul",
        age: 21,
        course: "BCA"
    },
    {
        name: "Aman",
        age: 23,
        course: "B.Tech"
    }
];

console.table(students)
console.group("group data")
console.log("My log 1")
console.log("My log 2")
console.log("My log 3")
console.log("My log 4")
console.groupEnd()


console.time("time start now")
let dnaData = 0
for(let i =0; i<10000; i++){
    dnaData++;
}
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.timeEnd("time start now")

console.log("chaicode")
console.log("chaicode")
console.log("chaicode")
console.count("ChaiCode 2")