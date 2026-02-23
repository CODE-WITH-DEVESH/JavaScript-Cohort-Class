const playerHealth = 75;
const hasShield= true
const hasSword = false

if(playerHealth <= 30 && hasShield){
    console.log("Goo Bebe")
}

const isLogged =true
const hasCourese = false

if(isLogged && hasCourese){
console.log("allowed")
}
const chosenPath ="left"

switch(chosenPath){
    case "right":
    console.log("User selected right")
    break;
    case "left":
        console.log("user seleted left")
        break;
        defaul:
        "end"

} 
// =====================================================
// YOUR VARIABLES (unchanged as you provided)
// =====================================================

const playerHealth = 75;
const hasShield = true;
const hasSword = false;


// =====================================================
// 1️⃣ Basic if Condition with Logical AND (&&)
// =====================================================

// Real project style variables added by me
const playerName = "Devesh";
const criticalHealthLevel = 30;

if (playerHealth <= criticalHealthLevel && hasShield) {
    console.log("Shield activated for protection");
} else {
    console.log("Player health is stable, no shield needed");
}

/*
Explanation:
&& means BOTH conditions must be true

Condition check:
playerHealth <= 30 → false (75 > 30)
hasShield → true

Final result → false
So else block runs
*/



// =====================================================
// 2️⃣ Multiple condition check (Login system)
// =====================================================

const isLogged = true;
const hasCourese = false;

// project-style variables added
const userEmail = "devesh@gmail.com";
const courseName = "JavaScript Mastery";

if (isLogged && hasCourese) {
    console.log("User allowed to access course:", courseName);
} else {
    console.log("Access denied. Please purchase the course.");
}

/*
Explanation:
User must satisfy BOTH:
1. Logged in
2. Has course

Here hasCourse = false
So access denied
*/



// =====================================================
// 3️⃣ Logical OR (||)
// =====================================================

// project-style variables added
const isAdmin = false;
const isInstructor = true;

if (isAdmin || isInstructor) {
    console.log("User has content management access");
}

/*
Explanation:
|| means ANY ONE condition true

isAdmin → false
isInstructor → true

Final → true
*/



// =====================================================
// 4️⃣ Logical NOT (!)
// =====================================================

// project-style variable
const isAccountVerified = false;

if (!isAccountVerified) {
    console.log("Please verify your account to continue");
}

/*
Explanation:
! reverses the value

!false → true
*/



// =====================================================
// 5️⃣ switch Statement (Multiple options)
// =====================================================

const chosenPath = "left";

// project-style variable
const gameLevel = 3;

switch (chosenPath) {

    case "right":
        console.log("User selected RIGHT path at level", gameLevel);
        break;

    case "left":
        console.log("User selected LEFT path at level", gameLevel);
        break;

    case "forward":
        console.log("User selected FORWARD path at level", gameLevel);
        break;

    default:
        console.log("Invalid path selected");
}

/*
Explanation:

switch compares exact value

chosenPath = "left"

case "left" matched
so that block runs

break stops switch execution
*/



// =====================================================
// 6️⃣ Ternary Operator (Short if else)
// =====================================================

// project-style variable
const coins = 150;

const weaponAccess = coins >= 100 
    ? "Weapon unlocked"
    : "Not enough coins";

console.log(weaponAccess);

/*
Explanation:

condition ? true : false

coins >= 100 → true
*/



// =====================================================
// 7️⃣ Truthy and Falsy Values
// =====================================================

// project-style variable
const username = "";

if (username) {
    console.log("Welcome", username);
} else {
    console.log("Username is required");
}

/*
Falsy values in JavaScript:

false
0
""
null
undefined
NaN
*/



// =====================================================
// 8️⃣ Nested Condition (Real project scenario)
// =====================================================

// project-style variables
const isUserLoggedIn = true;
const subscriptionPlan = "Pro";

if (isUserLoggedIn) {

    if (subscriptionPlan === "Pro") {
        console.log("Access premium dashboard");
    } else {
        console.log("Upgrade to Pro plan");
    }

}

// Final Simple Explanation (Very Important)
// 1. if

// Condition true → code runs

// 2. else

// Condition false → else runs

// 3. && (AND)

// Both conditions must be true

// 4. || (OR)

// Any one condition must be true

// 5. ! (NOT)

// Reverse the condition

// 6. switch

// Check multiple exact values

// 7. ternary operator

// Short form of if else