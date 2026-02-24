const order = {
    orderId: "ORD001",
    customerName: "Rahul Sharma",
    dish: "Chicken Biryani",
    price: 16,
    spicy: true,
    qty: 2,
    status: "Preparing",
    tableNumber: 5,
    orderTime: "14:30"
};

const keys = Object.keys(order)
const value = Object.values(order)
const entries = Object.entries(order)

console.log(keys)
console.log(value)
console.log(entries)

for (const [key, value] of Object.entries(order)) {
    console.log(`${key} and ${value}`)
}

const displayCase = {
    artifact: "Obsidian",
    location: "hall A Case 3",
    locked: true,

}
Object.freeze(displayCase)
delete displayCase.locked;
displayCase.newProp = "test"
console.log(displayCase)

// InterView Qustions
const cateLog = {
    id: "ART-001",
    disscription: "This is Game Projects",
    varifired: true
}
Object.seal(cateLog)
cateLog.varifired = false
console.log(cateLog)

// diff b/w freeze and seal 

const secureData = { name: "AK baghel" }
Object.defineProperty(secureData, "cateLogID",{
    value:"SEC-999",
    writable:false,
    // enumerable:true,
    enumerable:false,
    configurable:false
})
// what is writable and enumerable ,configurable
console.log(secureData.cateLogID)
secureData.cateLogID="HACKED"
console.log(secureData.cateLogID)

for(const [key,value] of Object.entries(secureData)){
    console.log(`${key} and ${value}`)
}

const dec =Object.getOwnPropertyDescriptor(secureData,"cateLogID")
console.log(dec)
// Why is print undefined Ans me and correct the code 


// loop key points 
// 1. for()
// 2.while loop
// 3. do while
// 4. for...in
// 5. for ...of 
// 6. map,forEach , filter , reduce 
// ok give me all loop with Example and diff all 

// =====================================================
// YOUR OBJECT
// =====================================================

const order = {
    orderId: "ORD001",
    customerName: "Rahul Sharma",
    dish: "Chicken Biryani",
    price: 16,
    spicy: true,
    qty: 2,
    status: "Preparing",
    tableNumber: 5,
    orderTime: "14:30"
};


// =====================================================
// Object.keys()
// =====================================================

const keys = Object.keys(order)

console.log(keys)

/*
Explanation:

Object.keys(order)

returns array of all keys

Output:
[
 "orderId",
 "customerName",
 "dish",
 "price",
 "spicy",
 "qty",
 "status",
 "tableNumber",
 "orderTime"
]
*/


// =====================================================
// Object.values()
// =====================================================

const value = Object.values(order)

console.log(value)

/*
Explanation:

returns all values in array
*/


// =====================================================
// Object.entries()
// =====================================================

const entries = Object.entries(order)

console.log(entries)

/*
Explanation:

returns array of [key, value]

Example:
[
 ["orderId", "ORD001"],
 ["customerName", "Rahul Sharma"]
]
*/


// =====================================================
// Loop Object using Object.entries()
// =====================================================

for (const [key, value] of Object.entries(order)) {
    console.log(`${key} and ${value}`)
}

/*
Explanation:

Destructuring used

key → property name
value → property value
*/


// =====================================================
// Object.freeze()
// =====================================================

const displayCase = {
    artifact: "Obsidian",
    location: "hall A Case 3",
    locked: true,
}

Object.freeze(displayCase)

delete displayCase.locked;
displayCase.newProp = "test"

console.log(displayCase)

/*
Explanation:

freeze ke baad:

❌ cannot delete
❌ cannot add
❌ cannot modify

Object completely locked
*/


// =====================================================
// Object.seal()
// =====================================================

const cateLog = {
    id: "ART-001",
    disscription: "This is Game Projects",
    varifired: true
}

Object.seal(cateLog)

cateLog.varifired = false

console.log(cateLog)

/*
Explanation:

seal allows:

✅ modify existing property

but:

❌ cannot add
❌ cannot delete
*/


// =====================================================
// Object.defineProperty()
// =====================================================

const secureData = { name: "AK baghel" }

Object.defineProperty(secureData, "cateLogID", {

    value: "SEC-999",

    writable: false,

    enumerable: false,

    configurable: false

})


console.log(secureData.cateLogID)


secureData.cateLogID = "HACKED"

console.log(secureData.cateLogID)

/*
Explanation:

writable:false

value cannot change

still SEC-999
*/


// =====================================================
// Why not showing in loop?
// =====================================================

for(const [key,value] of Object.entries(secureData)){
    console.log(`${key} and ${value}`)
}

/*
Explanation:

enumerable:false

means hidden from loops

That's why cateLogID not printed
*/


// =====================================================
// Descriptor
// =====================================================

const dec = Object.getOwnPropertyDescriptor(secureData,"cateLogID")

console.log(dec)

/*
Output:

{
 value: "SEC-999",
 writable: false,
 enumerable: false,
 configurable: false
}
*/

// freeze vs seal vs defineProperty (INTERVIEW QUESTION)
// freeze
// Object.freeze(obj)

// ❌ add
// ❌ delete
// ❌ modify


// // seal
// Object.seal(obj)

// ❌ add
// ❌ delete
// ✅ modify


// // defineProperty

// control:

// writable
// enumerable
// configurable


// ALL LOOPS COMPLETE

// =====================================================
// Sample data
// =====================================================

const numbers = [10, 20, 30, 40];

const user = {
    name: "Devesh",
    role: "Admin"
};


// =====================================================
// 1. for loop
// =====================================================

for(let i = 0; i < numbers.length; i++){

    console.log(numbers[i]);

}

/*
Best control loop
*/



// =====================================================
// 2. while loop
// =====================================================

let i = 0;

while(i < numbers.length){

    console.log(numbers[i]);

    i++;

}




// =====================================================
// 3. do while
// =====================================================

let j = 0;

do{

    console.log(numbers[j]);

    j++;

}while(j < numbers.length);




// =====================================================
// 4. for...of (array loop)
// =====================================================

for(const value of numbers){

    console.log(value);

}

/*
best for arrays
*/




// =====================================================
// 5. for...in (object loop)
// =====================================================

for(const key in user){

    console.log(key, user[key]);

}

/*
best for objects
*/




// =====================================================
// 6. forEach
// =====================================================

numbers.forEach(num => console.log(num));




// =====================================================
// 7. map
// =====================================================

const doubled = numbers.map(num => num * 2);

console.log(doubled);




// =====================================================
// 8. filter
// =====================================================

const filtered = numbers.filter(num => num > 20);

console.log(filtered);




// =====================================================
// 9. reduce
// =====================================================

const sum = numbers.reduce((acc,num)=>acc+num,0);

console.log(sum);

// Loop Difference Summary
// for → full control
// while → condition based
// do while → run at least once
// for...of → arrays
// for...in → objects
// forEach → array loop
// map → create new array
// filter → filter array
// reduce → combine array

// Why cateLogID not showing in loop (YOUR QUESTION ANSWER)
// enumerable:false
// Object.defineProperty(secureData, "cateLogID", {
//  value:"SEC-999",
//  writable:false,
//  enumerable:true,
//  configurable:false
// })
// =====================================================
// 1️⃣ Basic Object Destructuring
// =====================================================

// project-style object
const userProfile = {
    userId: 101,
    userName: "Devesh",
    userRole: "Admin",
    email: "devesh@gmail.com"
};

// destructuring
const { userName, userRole } = userProfile;

console.log(userName);
console.log(userRole);

/*
Explanation:

Instead of:

const userName = userProfile.userName

We use destructuring

Short and clean way
*/



// =====================================================
// 2️⃣ Rename variables while destructuring
// =====================================================

const { userName: name, userRole: role } = userProfile;

console.log(name);
console.log(role);

/*
Explanation:

userName renamed to name
userRole renamed to role
*/




// =====================================================
// 3️⃣ Default values
// =====================================================

const product = {
    productName: "Laptop",
    price: 50000
};

const { productName, category = "Electronics" } = product;

console.log(productName);
console.log(category);

/*
Explanation:

category does not exist in object

default value used
*/




// =====================================================
// 4️⃣ Nested Object Destructuring
// =====================================================

const orderDetails = {
    orderId: "ORD001",
    customer: {
        customerName: "Rahul",
        city: "Delhi"
    }
};

const { customer: { customerName, city } } = orderDetails;

console.log(customerName);
console.log(city);




// =====================================================
// 5️⃣ Destructuring in function parameters
// =====================================================

const course = {
    courseName: "JavaScript",
    price: 1999
};

function displayCourse({ courseName, price }) {

    console.log(courseName, price);

}

displayCourse(course);

/*
Explanation:

Direct destructuring in function
*/




// =====================================================
// 6️⃣ Real Project Example (API response)
// =====================================================

const apiResponse = {
    status: "success",
    data: {
        id: 1,
        name: "Devesh",
        role: "Student"
    }
};

const { status, data: { name: apiName, role: apiRole } } = apiResponse;

console.log(status);
console.log(apiName);
console.log(apiRole);




// =====================================================
// 7️⃣ Destructuring with rest operator
// =====================================================

const adminUser = {
    id: 1,
    name: "Admin",
    email: "admin@gmail.com",
    password: "secret"
};

const { password, ...safeUser } = adminUser;

console.log(safeUser);

/*
Explanation:

password removed
rest stored in safeUser
*/




// =====================================================
// 8️⃣ Destructuring already declared variables
// =====================================================

let userId;

({ userId } = userProfile);

console.log(userId);




// =====================================================
// 9️⃣ Combined Example (Real project scenario)
// =====================================================

const loginResponse = {
    token: "abc123",
    user: {
        id: 101,
        name: "Devesh",
        role: "Admin"
    }
};

const {
    token,
    user: { id, name: loginName, role: loginRole }
} = loginResponse;

console.log(token);
console.log(id);
console.log(loginName);
console.log(loginRole);


// Simple Explanation
// Object destructuring ka matlab:
// object se direct variables extract karna
// const name = user.name;
// const { name } = user;


// Real Project Use


// API response handling
// React props
// Node.js backend
// Database results
// Authentication systems
// const { token } = loginResponse;
// Most Important Points
// { name } = object → basic destructuring

// { name: newName } → rename

// { age = 18 } → default value

// { user: { name } } → nested destructuring

// { password, ...rest } → rest operator

