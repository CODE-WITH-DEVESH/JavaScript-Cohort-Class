// 1
const crewMembers = 49
const fulTons = 142.42
const light_speed = 23_567_578

// 2
const iffiniteRange = Infinity
const negtiveInfinaiteRange = -Infinity
const notANumber = NaN;
console.log(1 / 0)
console.log(-1 / 0)

// 3
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
// What is EPI
console.log(Number.EPSILON)
console.log(Number.isInteger())
console.log(Number.isNaN(notANumber))

// 4
const fuleReading = "142.75 tons"
const sectorCode = "0xA3"
const countDown = "007"
console.log(parseInt(fuleReading))
console.log(parseInt(sectorCode))
console.log(parseInt(countDown))
console.log(parseFloat(countDown))
console.log(parseInt("111", 2))

// 5 Math
const thrusForce = 4.567
console.log(Math.round(thrusForce))
console.log(Math.floor(thrusForce))
console.log(Math.ceil(thrusForce))
console.log(Math.trunc(thrusForce))

const temp = [123, 43, 56, 78, 23]
console.log(Math.min(temp))
console.log(0.1 + 0.2 === 0.3)
function alomostEqual(a, b) { 
    return Math.abs(a - b) < Number.EPSILON
}
console.log(alomostEqual(0.1 + 0.2, 0.3))