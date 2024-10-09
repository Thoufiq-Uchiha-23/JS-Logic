// Filtering an array of objects to display items based on a search query (e.g., filtering products by type)

const products = [
    {name: "Laptop", type: "Electronics"},
    {name: "Phone", type: "Electronics"},
    {name: "Tablet", type: "Electronics"},
    {name: 'Monitor', type: "Electronics"},
    {name: "Shirts", type: "Clothing"},
    {name: "Pants", type: "Clothing"},
    {name: "Shoes", type: "Footwear"}
]

let newarr = products.filter(function (product) {
    return product.type === "Electronics"
})

console.log(newarr)
// 4) [{…}, {…}, {…}, {…}]
// 0
// : 
// {name: 'Laptop', type: 'Electronics'}
// 1
// : 
// {name: 'Phone', type: 'Electronics'}
// 2
// : 
// {name: 'Tablet', type: 'Electronics'}
// 3
// : 
// {name: 'Monitor', type: 'Electronics'}
// length
// : 
// 4
// [[Prototype]]
// : 
// Array(0)