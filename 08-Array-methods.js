const users = [
    {
        id: 101,
        name: "Devesh Kumar",
        role: "Student",
        email: "devesh@example.com",
        department: "Computer Science"
    },
    {
        id: 102,
        name: "Rohit Sharma",
        role: "Teacher",
        email: "rohit@example.com",
        department: "Mathematics"
    },
    {
        id: 103,
        name: "Anjali Singh",
        role: "Admin",
        email: "anjali@example.com",
        department: "Administration"
    }
];

const courses = [
    {
        id: 1,
        courseName: "Full Stack Web Development",
        instructor: "Hitesh Choudhary",
        duration: "6 months",
        price: 4999,
        currency: "INR",
        isAvailable: true
    },
    {
        id: 2,
        courseName: "Java Programming Masterclass",
        instructor: "Piyush Garg",
        duration: "4 months",
        price: 2999,
        currency: "INR",
        isAvailable: true
    },
    {
        id: 3,
        courseName: "Data Structures and Algorithms",
        instructor: "Love Babbar",
        duration: "5 months",
        price: 3999,
        currency: "INR",
        isAvailable: false
    },

];
const mydata = users.forEach((user, index) => {
    console.log(`#${index + 1}: ${user.id} : ${user.name} : Role : ${user.role}`)
})

// console.log(typeof mydata)
const data = courses.map((course) => {

    return `${course.courseName} :${course.duration} : ${course.price}`
})
console.log(data)

// const available = courses.filter((a)=>{
//    return `Course Available ${a.isAvailable}`
// })
// console.log(available)

const available = courses.filter((a) => a.isAvailable)
console.log(available)

// 

const totalRevence = courses.reduce((sum, course) => {
    return sum + course.price

}, 0)

console.log("totalRevence : $", totalRevence)

const orders = [
    {
        dish: "Pasta Carbonara",
        price: 14,
        spicy: false,
        qty: 2
    },
    {
        dish: "Dragon Ramen",
        price: 12,
        spicy: true,
        qty: 1
    },
    {
        dish: "Caesar Salad",
        price: 9,
        spicy: false,
        qty: 3
    },

];

const grouped = orders.reduce((acc, order) => {
    const category = order.spicy ? "spicy" : "mild";
    acc[category].push(order.dish)
    return acc
}

    , { spicy: [], mild: [] })
console.log(grouped)

// what is reduceRight

const ticketNumber = [100, 25, 3, 4, 5, 6, 7,]
const sortArray = [...ticketNumber].sort((a, b) => a - b)
console.log(sortArray)


const kitchenOrders = [
    { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
    { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
    { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
    { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
    { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 },
    { dish: "Ghost Pepper Soup", price: 15, spicy: true, qty: 1 },

];

console.log(kitchenOrders);
const mindReport = kitchenOrders.filter(order=>!order.spicy)
.map(order=>({
    dish:order.dish,
    total:order.price *order.qty
}))
console.log(mindReport)


// =====================================================
// YOUR ARRAYS (unchanged as you provided)
// =====================================================

const users = [
    { id: 101, name: "Devesh Kumar", role: "Student", email: "devesh@example.com", department: "Computer Science" },
    { id: 102, name: "Rohit Sharma", role: "Teacher", email: "rohit@example.com", department: "Mathematics" },
    { id: 103, name: "Anjali Singh", role: "Admin", email: "anjali@example.com", department: "Administration" }
];

const courses = [
    { id: 1, courseName: "Full Stack Web Development", instructor: "Hitesh Choudhary", duration: "6 months", price: 4999, currency: "INR", isAvailable: true },
    { id: 2, courseName: "Java Programming Masterclass", instructor: "Piyush Garg", duration: "4 months", price: 2999, currency: "INR", isAvailable: true },
    { id: 3, courseName: "Data Structures and Algorithms", instructor: "Love Babbar", duration: "5 months", price: 3999, currency: "INR", isAvailable: false },
];


// =====================================================
// 1️⃣ forEach() → Loop through array (no return)
// =====================================================

// Project-style variable added
const activeUserLogs = [];

const mydata = users.forEach((user, index) => {
    const logMessage = `#${index + 1}: ${user.id} : ${user.name} : Role: ${user.role}`;
    console.log(logMessage);

    // storing logs (real project use)
    activeUserLogs.push(logMessage);
});

/*
Explanation:
forEach loop chalata hai array par

IMPORTANT:
forEach kuch return nahi karta
mydata → undefined
*/




// =====================================================
// 2️⃣ map() → Create new array from existing array
// =====================================================

// Project-style variable added
const courseCatalog = courses.map((course) => {
    return `${course.courseName} : ${course.duration} : ₹${course.price}`;
});

console.log(courseCatalog);

/*
Explanation:
map NEW array banata hai

Real project use:
UI mein course list show karne ke liye
*/




// =====================================================
// 3️⃣ filter() → Filter data based on condition
// =====================================================

const available = courses.filter((course) => course.isAvailable);

console.log(available);

/*
Explanation:
filter sirf wo elements return karta hai
jo condition satisfy kare

Real use:
Available courses show karna
*/




// =====================================================
// 4️⃣ reduce() → Combine all values into single value
// =====================================================

const totalRevence = courses.reduce((sum, course) => {
    return sum + course.price;
}, 0);

console.log("totalRevence:", totalRevence);

/*
Explanation:
reduce sab prices ko add karta hai

Real use:
Total revenue calculation
Shopping cart total
*/




// =====================================================
// 5️⃣ reduce() → Group data (Advanced use)
// =====================================================

const orders = [
    { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
    { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
    { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
];

// Project-style variable added
const groupedOrders = orders.reduce((acc, order) => {

    const category = order.spicy ? "spicy" : "mild";

    acc[category].push(order.dish);

    return acc;

}, { spicy: [], mild: [] });

console.log(groupedOrders);

/*
Explanation:
reduce object create kar sakta hai

Output:
{
  spicy: ["Dragon Ramen"],
  mild: ["Pasta Carbonara", "Caesar Salad"]
}
*/




// =====================================================
// 6️⃣ sort() → Sort array
// =====================================================

const ticketNumber = [100, 25, 3, 4, 5, 6, 7];

const sortArray = [...ticketNumber].sort((a, b) => a - b);

console.log(sortArray);

/*
Explanation:
sort numbers ascending order mein arrange karta hai

Spread operator (...) original array safe rakhta hai
*/




// =====================================================
// 7️⃣ filter + map chaining (Very Important)
// =====================================================

const kitchenOrders = [
    { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
    { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
    { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
    { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
    { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 },
    { dish: "Ghost Pepper Soup", price: 15, spicy: true, qty: 1 },
];

// Project-style variable added
const mindReport = kitchenOrders
    .filter(order => !order.spicy)
    .map(order => ({
        dish: order.dish,
        total: order.price * order.qty
    }));

console.log(mindReport);

/*
Explanation:

Step 1:
filter → non-spicy orders

Step 2:
map → new object create

Real use:
Invoice generation
Dashboard reports
*/




// =====================================================
// 8️⃣ reduceRight() → Same as reduce but right to left
// =====================================================

// Project-style variable added
const numbers = [1, 2, 3, 4];

const rightSum = numbers.reduceRight((acc, num) => acc + num, 0);

console.log(rightSum);

/*
Explanation:
reduceRight last element se start karta hai

Normal reduce:
1 → 2 → 3 → 4

reduceRight:
4 → 3 → 2 → 1
*/




// =====================================================
// 9️⃣ Array.isArray() → Check array or not
// =====================================================

// Project-style variable added
const systemLogs = ["Login", "Logout"];

console.log(Array.isArray(systemLogs)); // true
console.log(Array.isArray(users));      // true
console.log(Array.isArray({}));        // false



// =====================================================
// ALL ARRAY METHODS COMPLETE
// =====================================================

const studentNames = ["Devesh", "Rahul", "Aman"];


// push()
studentNames.push("Rohit");


// pop()
studentNames.pop();


// shift()
studentNames.shift();


// unshift()
studentNames.unshift("Admin");


// includes()
console.log(studentNames.includes("Devesh"));


// indexOf()
console.log(studentNames.indexOf("Rahul"));


// slice()
console.log(studentNames.slice(0, 2));


// splice()
studentNames.splice(1, 1);


// find()
const numbers = [10, 20, 30];
const result = numbers.find(n => n > 15);


// some()
console.log(numbers.some(n => n > 25));


// every()
console.log(numbers.every(n => n > 5));


// flat()
const nested = [1, [2, 3]];
console.log(nested.flat());


// concat()
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(arr1.concat(arr2));


// spread
const newArr = [...arr1, ...arr2];


// Array.from()
const name = "Devesh";
console.log(Array.from(name));


// Array.isArray()
console.log(Array.isArray(studentNames));