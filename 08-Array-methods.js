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
    {
        id: 4,
        courseName: "React JS Complete Guide",
        instructor: "CodeWithHarry",
        duration: "3 months",
        price: 1999,
        currency: "INR",
        isAvailable: true
    },
    {
        id: 5,
        courseName: "Node JS Backend Development",
        instructor: "Akshay Saini",
        duration: "4 months",
        price: 3499,
        currency: "INR",
        isAvailable: true
    }
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

console.log("totalRevence : $",totalRevence)

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
  {
    dish: "Inferno Wings",
    price: 11,
    spicy: true,
    qty: 2
  },
  {
    dish: "Truffle Risotto",
    price: 18,
    spicy: false,
    qty: 1
  }
];