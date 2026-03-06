function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();


function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

function startCompany() {
  function ca(name) {
    return `Name of your company is ${name}`;
  }
  return ca;
}

const getMeAcompany = startCompany();
const myCompanyName = getMeAcompany("Zomato");

function eternal(guest) {
  const guestName = guest;
  let count = 0;

  function zomato() {
    console.log(`Hi ${guestName}, from zomato`);
  }

  function blinkit() {
    if (count == 1) return;
    console.log(`Hi ${guestName}, from blinkit`);
    count++;
  }
  // zomato();
  // blinkit();
  return {
    zomato,
    blinkit,
  };
}

const hitesh = eternal("hitesh");
const piyush = eternal("Piyush");

hitesh.blinkit();
hitesh.blinkit();
hitesh.blinkit();

useMemo();

const cups = ["green", "blue", "red"];

cups.map;


// =====================================================
// Example 1
// =====================================================

function init() {

  var name = "Mozilla";

  function displayName() {

    console.log(name);

  }

  displayName();

}

init();

/*
Explanation:

displayName() inner function है

यह parent function init() के variable
"name" को access कर रहा है

इसको closure कहते हैं
*/

// =====================================================
// Example 2
// =====================================================

function makeFunc() {

  const name = "Mozilla";

  function displayName() {

    console.log(name);

  }

  return displayName;

}

const myFunc = makeFunc();

myFunc();

/*
Explanation:

makeFunc() run हुआ

displayName function return हुआ

लेकिन name variable अभी भी accessible है

यह closure की वजह से possible है
*/

// =====================================================
// Example 3
// =====================================================

function startCompany() {

  function ca(name) {

    return `Name of your company is ${name}`;

  }

  return ca;

}

const getMeAcompany = startCompany();

const myCompanyName = getMeAcompany("Zomato");

/*
Explanation:

startCompany() returns function

returned function remembers outer scope

Closure again
*/


// =====================================================
// Example 4 (Real Example)
// =====================================================

function eternal(guest) {

  const guestName = guest;

  let count = 0;

  function zomato() {

    console.log(`Hi ${guestName}, from zomato`);

  }

  function blinkit() {

    if (count == 1) return;

    console.log(`Hi ${guestName}, from blinkit`);

    count++;

  }

  return {

    zomato,

    blinkit,

  };

}

const hitesh = eternal("hitesh");

const piyush = eternal("Piyush");

hitesh.blinkit();
hitesh.blinkit();
hitesh.blinkit();

/*
Explanation:

count variable private है

Closure इसे preserve करता है

इसलिए blinkit only once print करेगा
*/


// =====================================================
// Problem in your code
// =====================================================

useMemo();

/*
Error:

useMemo React hook है

Plain JavaScript में available नहीं है
*/


// =====================================================
// Last part
// =====================================================

const cups = ["green", "blue", "red"];

cups.map;

/*
map function reference है

execute नहीं किया गया
*/


// COMPILER 2️⃣ — FULL CLOSURE CONCEPT

// =====================================================
// 1️⃣ Basic Closure
// =====================================================

function outer(){

  let message="Hello";

  function inner(){

    console.log(message);

  }

  inner();

}

outer();




// =====================================================
// 2️⃣ Returning Closure
// =====================================================

function counter(){

  let count=0;

  return function(){

    count++;

    return count;

  }

}

const increment=counter();

console.log(increment());
console.log(increment());
console.log(increment());




// =====================================================
// 3️⃣ Multiple Closures
// =====================================================

function createUser(name){

  let loginCount=0;

  return {

    login(){

      loginCount++;

      console.log(`${name} logged in ${loginCount} times`);

    }

  }

}

const user=createUser("Devesh");

user.login();
user.login();




// =====================================================
// 4️⃣ Closure with setTimeout
// =====================================================

for(let i=1;i<=3;i++){

  setTimeout(()=>{

    console.log(i);

  },1000)

}




// =====================================================
// 5️⃣ Private Variables using Closure
// =====================================================

function bankAccount(){

  let balance=1000;

  return {

    deposit(amount){

      balance+=amount;

    },

    getBalance(){

      return balance;

    }

  }

}

const acc=bankAccount();

acc.deposit(500);

console.log(acc.getBalance());




// =====================================================
// 6️⃣ Real Project Example
// =====================================================

function createCart(){

  let items=[];

  return {

    add(item){

      items.push(item);

    },

    list(){

      return items;

    }

  }

}

const cart=createCart();

cart.add("Laptop");

console.log(cart.list());

// Final Summary

// Closure = function + lexical scope

// Inner function remembers outer variables

// Used for private state

// Very important for React and async code