// const { jsx } = require("react/jsx-runtime");

const cache ={}
const sqCache ={}
function add(a,b){
const key =`${a} :${b}`
if(cache[key]){
    return cache[key]
}
    const result = a+b;
    cache[key] =result
    return result
}

function squence(n){
    if(sqCache[n]){
        return sqCache[n]
    }
}
add(3,5)
add(3,5)
add(3,5)
add(3,5)
console.log(add(3,5))


function createOptimisedVersion(fn){

    const cache2 = {}

    return function(...args){

        const key = JSON.stringify(args)

        if(cache2[key]){
            return cache2[key]
        }

        const result = fn(...args)

        cache2[key] = result

        return result

    }

}
const optimise = createOptimisedVersion(add)

console.log(optimise(4,5))
console.log(optimise(4,5))
console.log(optimise(4,5))


// COMPILER 2️⃣ — FULL MEMOIZATION CONCEPT


// =====================================================
// 1️⃣ Basic Function
// =====================================================

function slowSquare(n){

    console.log("Calculating...")

    return n*n

}

console.log(slowSquare(5))
console.log(slowSquare(5))








// =====================================================
// 2️⃣ Memoization using cache
// =====================================================

const cache = {}

function fastSquare(n){

    if(cache[n]){

        return cache[n]

    }

    console.log("Calculating...")

    const result = n*n

    cache[n] = result

    return result

}

console.log(fastSquare(5))
console.log(fastSquare(5))

// =====================================================
// 3️⃣ Generic Memoization Function
// =====================================================

function memoize(fn){

    const cache = {}

    return function(...args){

        const key = JSON.stringify(args)

        if(cache[key]){

            return cache[key]

        }

        const result = fn(...args)

        cache[key] = result

        return result

    }

}

// =====================================================
// 4️⃣ Using Memoization
// =====================================================

function multiply(a,b){

    console.log("Calculating...")

    return a*b

}

const fastMultiply = memoize(multiply)

console.log(fastMultiply(4,5))
console.log(fastMultiply(4,5))

// =====================================================
// 5️⃣ Fibonacci Example (Real Memoization)
// =====================================================

function fibonacci(n){

    if(n<=1) return n

    return fibonacci(n-1) + fibonacci(n-2)

}

// =====================================================
// Memoized Fibonacci
// =====================================================

function memoFib(){

    const cache = {}

    function fib(n){

        if(cache[n]) return cache[n]

        if(n<=1) return n

        const result = fib(n-1) + fib(n-2)

        cache[n] = result

        return result

    }

    return fib

}

const fastFib = memoFib()

console.log(fastFib(40))