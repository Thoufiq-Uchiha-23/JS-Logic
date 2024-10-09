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

const names = ["Alice", "Bob", "Akash", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Isabel", "Jack", "Kate", "Liam", "Mia", "Noah", "Olivia", "Peter", "Quinn", "Rachet", "Sam", "Tina"]


// filter
let newarr = names.filter(function(value) {
    // if (value === "Alice") {
    //     return true
    //     // ['Alice']

    // }
    if (value.startsWith("A")) {
        return true
    }
})