/**
 * forEach() মেথডটি JavaScript-এ একটি অ্যারে মেথড, যা অ্যারের প্রতিটি উপাদানের উপর একটি নির্দিষ্ট ফাংশন প্রয়োগ করে, তবে এটি কোনো নতুন অ্যারে রিটার্ন করে না। এটি শুধুমাত্র সাইড এফেক্টস (যেমন কনসোলে কিছু প্রিন্ট করা) বা কিছু অপারেশন করার জন্য ব্যবহার করা হয়।
 * 
 * array.forEach(function(currentValue, index, array), thisValue);

currentValue: প্রতিটি উপাদানের মান।
index (optional): উপাদানের ইনডেক্স।
array (optional): মূল অ্যারে।
thisValue (optional): মেথডের ভিতরে ব্যবহারের জন্য একটি this মান।

উদাহরণ ১: প্রতিটি উপাদান কনসোলে প্রিন্ট করা
const numbers = [10, 20, 30, 40];

numbers.forEach(num => console.log(num));

// আউটপুট:
// 10
// 20
// 30
// 40

উদাহরণ ২: ইনডেক্স সহ ব্যবহার করা
const fruits = ['apple', 'banana', 'mango'];

fruits.forEach((fruit, index) => {
    console.log(`Index ${index}: ${fruit}`);
});

// আউটপুট:
// Index 0: apple
// Index 1: banana
// Index 2: mango

const fruits = ['apple', 'banana', 'mango'];

fruits.forEach((fruit, index) => {
    console.log(`Index ${index}: ${fruit}`);
});

// আউটপুট:
// Index 0: apple
// Index 1: banana
// Index 2: mango

উদাহরণ ৩: অ্যারের উপাদান যোগফল বের করা
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

numbers.forEach(num => {
    sum += num;
});

console.log(sum);  // আউটপুট: 15
মূল পার্থক্য map() এর সাথে:
map() একটি নতুন অ্যারে রিটার্ন করে যেখানে প্রতিটি উপাদান পরিবর্তিত হয়।
forEach() কোনো নতুন অ্যারে রিটার্ন করে না, এটি কেবল অ্যারের প্রতিটি উপাদানের উপর নির্দিষ্ট কাজ করে।
forEach() সাধারণত এমন ক্ষেত্রে ব্যবহার করা হয় যেখানে শুধু কোনো অ্যাকশন প্রয়োজন, কিন্তু নতুন অ্যারে প্রয়োজন হয় না।
 
 * // node forEach.js
 */7

const numbers = [1, 5, 6, 4, 15];
const result = numbers.forEach(n => console.log(n))
console.log(result);
