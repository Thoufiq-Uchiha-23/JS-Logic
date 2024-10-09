// Removing or updating a specific object in an array of data based on a unique ID

const users = [
  { id: 1, name: "Alice", age: 28 },
  { id: 2, name: "Bob", age: 35 },
  { id: 3, name: "Charlie", age: 42 },
  { id: 4, name: "Diana", age: 31 },
  { id: 5, name: "Ethan", age: 39 },
];

let newarr = users.filter(function (user) {
    return user.id !== 2;
})

console.log(newarr)
// 4) [{…}, {…}, {…}, {…}]
// 0
// : 
// {id: 1, name: 'Alice', age: 28}
// 1
// : 
// {id: 3, name: 'Charlie', age: 42}
// 2
// : 
// {id: 4, name: 'Diana', age: 31}
// 3
// : 
// {id: 5, name: 'Ethan', age: 39}
// length
// : 
// 4
// [[Prototype]]
// : 
// Array(0)