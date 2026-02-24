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

console.log(order)
order.priceTwo = 3;
console.log(order)
delete order.status
console.log(order)


const ranger ={
    name: "Fire free",
    data: 50,
    week: undefined
}
console.log("name" in ranger)
console.log("week" in ranger)
console.log("toString" in ranger)
console.log(ranger.hasOwnProperty("toString"))


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

console.log(order);

/*
Explanation:
Ye ek object hai jisme order ki sari information stored hai
Object → key : value pair hota hai
*/


// =====================================================
// Adding new property
// =====================================================

order.priceTwo = 3;

console.log(order);

/*
Explanation:

priceTwo new property add ho gayi

Object dynamic hota hai
new property kabhi bhi add kar sakte hain
*/


// =====================================================
// delete property
// =====================================================

delete order.status;

console.log(order);

/*
Explanation:

delete keyword object ki property remove karta hai

status property delete ho gayi
*/


// =====================================================
// in operator
// =====================================================

const ranger = {
    name: "Fire free",
    data: 50,
    week: undefined
};

console.log("name" in ranger);
console.log("week" in ranger);
console.log("toString" in ranger);

/*
Explanation:

"in" check karta hai property exist karti hai ya nahi

"name" → true (exist karta hai)

"week" → true (exist karta hai even undefined ho)

"toString" → true (because inherited from Object prototype)
*/


// =====================================================
// hasOwnProperty()
// =====================================================

console.log(ranger.hasOwnProperty("toString"));

/*
Explanation:

hasOwnProperty check karta hai object ki OWN property

toString ranger ki own property nahi hai
Isliye false
*/







// =====================================================
// OBJECT METHODS COMPLETE
// =====================================================

const user = {
    id: 101,
    name: "Devesh",
    role: "Admin"
};


// =====================================================
// 1. Access property
// =====================================================

console.log(user.name);
console.log(user["role"]);


// =====================================================
// 2. Add property
// =====================================================

user.email = "devesh@gmail.com";


// =====================================================
// 3. Update property
// =====================================================

user.role = "Super Admin";


// =====================================================
// 4. Delete property
// =====================================================

delete user.id;


// =====================================================
// 5. Check property
// =====================================================

console.log("name" in user);


// =====================================================
// 6. Object.keys()
// =====================================================

console.log(Object.keys(user));

/*
Returns all keys
*/


// =====================================================
// 7. Object.values()
// =====================================================

console.log(Object.values(user));

/*
Returns all values
*/


// =====================================================
// 8. Object.entries()
// =====================================================

console.log(Object.entries(user));

/*
Returns key value pairs
*/


// =====================================================
// 9. Object.assign()
// =====================================================

const extra = { status: "active" };

const merged = Object.assign({}, user, extra);

console.log(merged);




// =====================================================
// 10. Spread operator
// =====================================================

const spreadUser = { ...user, city: "Delhi" };

console.log(spreadUser);




// =====================================================
// 11. hasOwnProperty()
// =====================================================

console.log(user.hasOwnProperty("name"));




// =====================================================
// 12. Object.freeze()
// =====================================================

const config = { mode: "dark" };

Object.freeze(config);

config.mode = "light";

console.log(config);

/*
value change nahi hogi
*/




// =====================================================
// 13. Object.seal()
// =====================================================

const account = { balance: 1000 };

Object.seal(account);

account.balance = 2000;

console.log(account);




// =====================================================
// 14. Loop object
// =====================================================

for (let key in user) {

    console.log(key, user[key]);

}



// FINAL SUMMARY (Very Important)

// property add → order.priceTwo = 3

// delete property → delete order.status

// "in" → property exist check

// hasOwnProperty() → own property check

// Object.keys()
// Object.values()
// Object.entries()
// Object.assign()
// spread operator
// freeze()
// seal()
// hasOwnProperty()
// delete
// in