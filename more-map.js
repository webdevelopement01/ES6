const numbers = [ 12, 14, 25, 18];
const doubled = numbers.map(num => num * 2);
// console.log(doubled)
const fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus);
const halves = numbers.map(num => num / 2);
// console.log(halves)

const friends = [ 'tom', 'john', 'micheal']
const lengths = friends.map(frnd => frnd.length)
// console.log(lengths);
const firstLetter = friends.map(friend => friend[0])
console.log(firstLetter);

// node more-map.js

/**
 * map() মেথডটি JavaScript-এ একটি অ্যারে মেথড, যা অ্যারের প্রতিটি উপাদানে একটি নির্দিষ্ট ফাংশন প্রয়োগ করে এবং একটি নতুন অ্যারে রিটার্ন করে। এটি মূল অ্যারেকে পরিবর্তন না করে নতুন অ্যারে তৈরি করে।
 * 
 * currentValue: প্রতিটি উপাদানের মান।
 * index (optional): উপাদানের ইনডেক্স।
 * array (optional): মূল অ্যারে।
 * thisValue (optional): মেথডের ভিতরে ব্যবহারের জন্য একটি this মান।
 * 
 * উদাহরণ ১: প্রতিটি উপাদানের square বের করা
 * const numbers = [2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num ** 2);

console.log(squaredNumbers);  // আউটপুট: [4, 9, 16, 25]
const numbers = [2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num ** 2);

console.log(squaredNumbers);  // আউটপুট: [4, 9, 16, 25]

 * 

উদাহরণ ২: অবজেক্টের একটি প্রপার্টি অ্যাক্সেস করা
const products = [
    { id: 1, name: 'lenovo laptop', price: 6500 },
    { id: 2, name: 'mackbook', price: 16600 },
];

const productNames = products.map(product => product.name);

console.log(productNames);  // আউটপুট: ['lenovo laptop', 'mackbook']

 * 
 * 
 * উদাহরণ ৩: ইনডেক্স সহ ব্যবহার করা
 * const numbers = [10, 20, 30];
const result = numbers.map((num, index) => `Index ${index}: ${num}`);

console.log(result);  
// আউটপুট: ['Index 0: 10', 'Index 1: 20', 'Index 2: 30']

map() প্রতিটি উপাদানের উপর নির্দিষ্ট কাজ করতে এবং একটি নতুন অ্যারে তৈরি করতে খুবই কার্যকর একটি মেথড।
 * 

 */