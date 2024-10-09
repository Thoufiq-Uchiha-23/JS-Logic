// const names = ["Alice", "Bob", "Charlie", "David", "Emma"]

// forEach
// names.forEach(function(value){
//     if(value === "Charlie"){}
//     else {
//         console.log(value)
//     }
// })

// map
// let newarr = names.map(function(value) {
//     // return 1;
//     // return value;
//     // (5) ['Alice', 'Bob', 'Charlie', 'David', 'Emma']
//     return value + " ji"
//     // (5) ['Alice ji', 'Bob ji', 'Charlie ji', 'David ji', 'Emma ji']
// })

// OUTPUT:
// (5) [1, 1, 1, 1, 1]

const names = [
  "Alice",
  "Bob",
  "Akash",
  "Charlie",
  "David",
  "Emma",
  "Frank",
  "Grace",
  "Henry",
  "Isabel",
  "Jack",
  "Kate",
  "Liam",
  "Mia",
  "Noah",
  "Olivia",
  "Peter",
  "Quinn",
  "Rachet",
  "Sam",
  "Tina",
];

// filter
let newarr = names.filter(function (value) {
  // if (value === "Alice") {
  //     return true
  //     // ['Alice']

  // }
  if (value.startsWith("A")) {
    return true;
  }
});

// destructuring
const user = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
    },
    phoneNumbers: [
      {
        type: "home",
        number: "555-1234",
      },
      {
        type: "work",
        number: "555-5678",
      },
    ],
    isActive: true,
    roles: ["user", "admin"],
    preferences: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
      },
    },
    lastLogin: new Date("2023-05-01T10:30:00"),
  },
];

//   let { zipCode } = user[0].address;  // Access the first user object
//   console.log(zipCode);  // Outputs: 12345

// let [first, second] = user[0].roles;
// console.log(first, second)
// let [_, second] = user[0].roles;
// console.log(second)

// Spread and rest operators
const names2 = ["John", "Jane", "Doe", "Smith"];
//   spread and rest ...

// Spread Operator - spreads those values right there as a copy
const copynames = [...names2];
// copynames
// (4) ['John', 'Jane', 'Doe', 'Smith']
// copynames.pop()
// 'Smith'
// copynames
// (3) ['John', 'Jane', 'Doe']
// names2
// (4) ['John', 'Jane', 'Doe', 'Smith']

const smallObject = {
  name: "John",
  age: 30,
  city: "New York",
};

// copying objects
const newObj = { ...smallObject };

// Rest Operator - when we pass values to func as parameters there it makes an array and returns

// function abcd(...chacha) {
//     console.log(chacha)
//     // (6) [1, 2, 3, 4, 5, 6]
// }

function abcd(a, b, c, ...chacha) {
  console.log(a, b, c, chacha);
  //  1 2 3 (3) [4, 5, 6]
}

abcd(1, 2, 3, 4, 5, 6);
