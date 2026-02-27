function prepareOrderCB(dish, cd) {
    setTimeout(() => cd(null, { dish, status: "Prepared" }), 100)
}
function pickupOrderCB(order, cd) {
    setTimeout(() => cd(null, { ...order, status: "Picked-up" }), 100)
}
function deliverOrder(order, cd) {
    setTimeout(() => cd(null, { ...order, status: "delivered" }), 100)
}

prepareOrderCB("Biryani", (err, order) => {
    if (err) return console.log(err);
    pickupOrderCB(order, (err, order) => {
        if (err) return console.log(err)
        deliverOrder(order, (err, order) => {
            if (err) return console.log(err)
            console.log(`${order.dish} :${order.status}`)
        })
    })
})


function prepareOrder(dish){
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            if(!dish){
                reject (new Error("No dish is thare"))
                return
            }
            console.log(`${dish} is ready`)
            resolve({dish,status : "prepared"})
        },100)
    })
}


function prepareOrder(order){
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
           
            console.log(`${order} is ready`)
            resolve({...order,status : "picked-up"})
        },100)
    })
}

function deliveredorder(order){
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
           
            console.log(`${order} is ready`)
            resolve({...order,status : "deliverd"})
        },100)
    })
}

// prepareOrder("Chai")
// .then(order=>{

// })

prepareOrder("Chai")
.then(order=>pickupOrderCB(order))
.then(order=> deliverOrder(order))
.catch()










// =====================================================
// 1️⃣ Callback Based Flow (Callback Hell Example)
// =====================================================

function prepareOrderCB(dish, cb) {

    setTimeout(() => cb(null, { dish, status: "Prepared" }), 100)

}

function pickupOrderCB(order, cb) {

    setTimeout(() => cb(null, { ...order, status: "Picked-up" }), 100)

}

function deliverOrder(order, cb) {

    setTimeout(() => cb(null, { ...order, status: "Delivered" }), 100)

}


/*
Explanation:

These are async functions

They use callback pattern:

cb(error, result)

This creates nested structure (callback hell)
*/


prepareOrderCB("Biryani", (err, order) => {

    if (err) return console.log(err)

    pickupOrderCB(order, (err, order) => {

        if (err) return console.log(err)

        deliverOrder(order, (err, order) => {

            if (err) return console.log(err)

            console.log(`${order.dish} : ${order.status}`)

        })

    })

})

/*
Problem:

Deep nesting

Hard to maintain

Called "Callback Hell"
*/


// =====================================================
// 2️⃣ Promise Version (Corrected)
// =====================================================

function prepareOrder(dish){

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{

            if(!dish){

                reject(new Error("No dish provided"))

                return

            }

            console.log(`${dish} prepared`)

            resolve({dish, status:"Prepared"})

        },100)

    })

}



function pickupOrder(order){

    return new Promise((resolve)=>{

        setTimeout(()=>{

            console.log(`${order.dish} picked up`)

            resolve({...order, status:"Picked-up"})

        },100)

    })

}



function deliverOrderPromise(order){

    return new Promise((resolve)=>{

        setTimeout(()=>{

            console.log(`${order.dish} delivered`)

            resolve({...order, status:"Delivered"})

        },100)

    })

}



// Proper Promise Chaining

prepareOrder("Chai")

.then(order=> pickupOrder(order))

.then(order=> deliverOrderPromise(order))

.then(order=> console.log(`${order.dish} : ${order.status}`))

.catch(error=> console.log(error.message))

/*
Clean chain
No nesting
Better readability
*/



// OMPILER 2️⃣ — FULL ASYNC CONCEPT (Complete)

// =====================================================
// 1️⃣ Callback Example
// =====================================================

function task1(cb){

    setTimeout(()=>{

        console.log("Task 1 done")

        cb()

    },500)

}

task1(()=> console.log("Next Task"))




// =====================================================
// 2️⃣ Promise Example
// =====================================================

function task2(){

    return new Promise(resolve=>{

        setTimeout(()=>{

            console.log("Task 2 done")

            resolve()

        },500)

    })

}

task2().then(()=> console.log("Next Task"))




// =====================================================
// 3️⃣ Promise Chaining
// =====================================================

function step1(){

    return Promise.resolve("Step 1")

}

function step2(){

    return Promise.resolve("Step 2")

}

step1()

.then(res=>{

    console.log(res)

    return step2()

})

.then(res=> console.log(res))




// =====================================================
// 4️⃣ Async / Await (Modern way)
// =====================================================

async function processOrder(){

    try{

        const order=await prepareOrder("Pizza")

        const picked=await pickupOrder(order)

        const delivered=await deliverOrderPromise(picked)

        console.log(delivered)

    }

    catch(error){

        console.log(error.message)

    }

}

processOrder()




// =====================================================
// 5️⃣ Promise.all()
// =====================================================

Promise.all([

    Promise.resolve("A"),

    Promise.resolve("B")

])

.then(results=> console.log(results))




// =====================================================
// 6️⃣ Promise.race()
// =====================================================

Promise.race([

    new Promise(res=> setTimeout(()=> res("Fast"),100)),

    new Promise(res=> setTimeout(()=> res("Slow"),500))

])

.then(result=> console.log(result))



// Real Project Use

// Used in:
// API calls

// Database queries

// File uploads

// Payment processing

// Authentication

// Notifications