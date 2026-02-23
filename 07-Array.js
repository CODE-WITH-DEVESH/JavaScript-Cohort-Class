const carriage1 =["Veer", "Dev" , "Ravi"]
const emptyCarriage =[]

const threeEmptySeats = Array(3)
console.log(threeEmptySeats)
console.log(threeEmptySeats.length)

const passenger = Array("Veer", "Love" , "Dev")
console.log(passenger)

const singlePassenger = Array.of(3)
console.log(singlePassenger)

const trainCode = Array.from("DEVESH")
console.log(trainCode)

const tempTrain =["A","B","C","D","E"]
trainCode.length =3;
console.log(tempTrain)
trainCode.length =7;
console.log(tempTrain)
// console.log(tempTrain.length)

// Push , pop , All Ok
// concat , slice ,flat
// Searching : indexof() ,includes , find, findIndex

const unshirtArray =["C","D","E","D",]

console.log(typeof [])
console.log(Array.isArray ([]))
console.log(Array.isArray (["VEER"]))

// keys points
// 1. []
// 2. Array(4)
// 2. Array are 0 based
// 3. Mutating methods : push , pop, shift,unshirt ,splice
// 4. Non Mutating methods : concat , slice , flat , flatmap [1,2,3,4,5,6]
// 5. Searching inclueds indexof
// 6. Array.isArray()