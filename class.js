const products = [
    {id: 1, name: 'lenovo', price: 60000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
   
]

// has some properties, method
class Product{
    country = 'Bangladesh'
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}

const lenovo = new Product('Abu Sayam');
console.log(lenovo);
lenovo.speak('oba kitafarf')

class Teacher {
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('sir is teaching Math');
    
    }
}

const sayam =  new Teacher('Abu sayam', 'Math');
console.log(sayam);

// node class.js