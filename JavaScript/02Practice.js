// Promise
// It a basically an object that represent eventual completion(or failure) of the asynchronous operation and its value.

// Node.js(file reading, API calls and DB queries)

// A callback is a function that passed as an argument to another function and called later.

function fetchData(callback) {
  setTimeout(() => {
    callback("Data Loaded!!");
  }, 1000);
}

fetchData((result) => {
  console.log(result);
});

// callback Hell (nested callbacks)

const fetchData1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Loaded 1!!");
    }, 1000);
  });
};

fetchData1().then((data) => console.log(data));

async function loadData() {
  try {
    const result = await fetchData1();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

loadData();

// Every js object has an internal link to another object called its prototype object.

const user = {
    name: "Vishal",

    greet() {
        console.log("Hello world");
        
    }
}

const admin = Object.create(user);
admin.greet();

// admin does not have greet function but it finds it via prototype chain.

// Inheritance with classes

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak1() {
        console.log(`${this.name} makes a sound!!`); 
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks!!`);
        
    }
}

const dog = new Dog("Tommy");
dog.speak();
dog.speak1();

// Shallow copy vs Deep copy

const original = {
    name: "Vishal",
    address: { city: "Meerut" }
}

const shallow = { ...original };
shallow.name = "Kunal";
shallow.address.city = "Noida";


console.log(original.address.city);
// console.log(shallow.address.city);


