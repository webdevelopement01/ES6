//node inheritance.js

class Vehicle {
    constructor(name, price ){
        this.name = name;
        this.price = name;
    }
    move(){
        console.log('Go to Dhaka');
    }
}

class Bus extends Vehicle {
    constructor (name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}






// জাভাস্ক্রিপ্টে extends কীওয়ার্ডটি ক্লাস ইনহেরিট্যান্সের (উত্তরাধিকার) জন্য ব্যবহৃত হয়। এর মাধ্যমে একটি ক্লাস অন্য একটি ক্লাস থেকে সমস্ত প্রোপার্টি এবং মেথড উত্তরাধিকারসূত্রে পায়। এই প্রক্রিয়ায়, আপনি বিদ্যমান ক্লাসের বৈশিষ্ট্য ব্যবহার করতে পারেন এবং প্রয়োজনে নতুন বৈশিষ্ট্য যোগ করতে পারেন।
// এটি অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিংয়ের (OOP) একটি গুরুত্বপূর্ণ বৈশিষ্ট্য, যা কোড পুনরায় ব্যবহারযোগ্য করে তোলে।

// এখানে একটি উদাহরণ দেখা যাক:
// Parent Class (Base Class)
class Animal {
 constructor(name) {
 this.name = name;
 }

 speak() {
 console.log(`${this.name} makes a sound.`);
 }
}

// Child Class (Derived Class)
class Dog extends Animal {
 constructor(name, breed) {
 super(name); // Parent class এর constructor কল
 this.breed = breed;
 }

 speak() {
 console.log(`${this.name} barks.`);
 }
}

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.speak(); // আউটপুট: Buddy barks.

// মূল বিষয়গুলো:
// extends কীওয়ার্ড: এটি ব্যবহার করে আমরা একটি ক্লাসকে অন্য ক্লাস থেকে উত্তরাধিকার পাই।
// super() মেথড: এটি প্যারেন্ট ক্লাসের constructor-কে কল করে। যদি চাইল্ড ক্লাসে constructor ডিফাইন করা থাকে, তবে প্যারেন্ট ক্লাসের constructor কল করার জন্য অবশ্যই super() ব্যবহার করতে হবে।
// Method overriding: চাইল্ড ক্লাসে আপনি প্যারেন্ট ক্লাসের কোনো মেথডকে ওভাররাইড করতে পারেন, যেমন উপরের উদাহরণে speak() মেথডটি ওভাররাইড করা হয়েছে।
// extends এর মাধ্যমে বড় এবং জটিল সিস্টেমকে সহজ ও পুনরায় ব্যবহারযোগ্য কোডে পরিণত করা যায়।