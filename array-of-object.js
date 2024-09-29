const products = [
    {id: 1, name: 'lenovo', price: 60000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
   
]

const names = products.map(product => product.name);
console.log(names);

products.forEach(p => console.log(p.id));

//filter
const  expensive = products.filter(p => p.price > 50000);
console.log(expensive);

// find 
const affordable = products.find(p => p.price < 50000);
console.log(affordable);

// node array-of-object.js
