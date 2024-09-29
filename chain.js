// data access
const data = [{id: 1, name: 'abul', address: 'kochu khet'}];
console.log(data[0].address);


const products = {
    count: 5000,
    data:[
        {id: 1, name: 'lenovo laptop', price: 6500},
        {id: 2, name:'mackbook', price: 16600},
    ]
}

//second product price 
console.log(products.data[1].price);


const user = {
    id: 5501,
    name: 'Abu Sayam',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'proibag er goli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}
console.log(user.address.street?.second)
 



//node chain.js