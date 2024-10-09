// Mapping over an array of user data to create a list of user cards

const users = [
  { name: "John", age: 20 },
  { name: "Jane", age: 21 },
  { name: "Doe", age: 22 },
];

let newarr = users.map(function (user) {
  return `<div><h3>${user.name}</h3><h5>${user.age}</h5></div>`;
});

// (3) ['<div><h3>John</h3><h5>20</h5></div>', '<div><h3>Jane</h3><h5>21</h5></div>', '<div><h3>Doe</h3><h5>22</h5></div>']
// 0
// : 
// "<div><h3>John</h3><h5>20</h5></div>"
// 1
// : 
// "<div><h3>Jane</h3><h5>21</h5></div>"
// 2
// : 
// "<div><h3>Doe</h3><h5>22</h5></div>"
// length
// : 
// 3
// [[Prototype]]
// : 
// Array(0)