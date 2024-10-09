// Grouping an array of objects by a specific property {e.g., grouping users by role}

const users = [
  { name: "John", age: 20, role: "admin" },
  { name: "Jane", age: 21, role: "user" },
  { name: "Doe", age: 22, role: "admin" },
];

let obj = {};

users.forEach(function (user) {
    if(obj[user.role]) {
        obj[user.role].push(user)
    }
    else {
        obj[user.role] = []
        obj[user.role].push(user)
    }
})

console.log(obj)
// {admin: Array(2), user: Array(1)}
// admin
// : 
// Array(2)
// 0
// : 
// {name: 'John', age: 20, role: 'admin'}
// 1
// : 
// {name: 'Doe', age: 22, role: 'admin'}
// length
// : 
// 2
// [[Prototype]]
// : 
// Array(0)
// user
// : 
// Array(1)
// 0
// : 
// {name: 'Jane', age: 21, role: 'user'}
// length
// : 
// 1
// [[Prototype]]
// : 
// Array(0)
// [[Prototype]]
// : 
// Object