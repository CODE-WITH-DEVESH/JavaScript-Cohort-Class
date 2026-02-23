const codeName ="Shadow fox"
const backupName = String("Night own")
const templeteName =`Agent ${codeName}`

let intercepted ="Hello"
intercepted[0]="J"
console.log(intercepted)

const sectorCode ="OMEGA-7"
console.log(sectorCode.length)
console.log(sectorCode.charAt())
console.log(sectorCode.at(-1))
console.log(sectorCode.charAt(99))

const rwaData = "The Eagel has data"
console.log(rwaData.toUpperCase())

const message ="The drop ponit is at dock 7"
console.log(message.indexOf("drop"))
message.slice(0,12)

const orders = "       move-north| hold-positons|extrract-vip"
ordersList =orders.slice("|")
console.log("Split",ordersList)
const mydatavalue="SOS".split("")
console.log(typeof mydatavalue)
const mydata=orders.trim()
console.log("My data :",mydata)


const missionNumber = "42"
console.log(missionNumber.padStart(6, "0"))
console.log(missionNumber.padEnd(6, "0"))


console.log(void 0)
console.log(void "Devesh")

let generalstore = {name : "Kirana" ,goods :2}

console.log(generalstore)
generalstore=undefined;
console.log(generalstore)
generalstore=null
console.log(generalstore)

