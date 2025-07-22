// Syntax of a promise

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("A");
    }, 100);
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

function fetchUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User data fetched");
        }, 1000)
    });
}

fetchUser().then(console.log);

// Execution Context -->

// When any Js code run it runs in a execution context which is the environement that defines how the code is executed

// Types ->
// 1. Global executed context(GEC)
//     -> It is created when any js file runs
//     -> this refers to the global object
//         in browser it is known as window and
//         in node js it is global
             
// 2. Function executon context(FEC)
//     -> Created everytime when the function is called and had its own arguments, scope and value of this
    
// What happens when you call a function is js ?
    
//     -> when we call a function in js then the new FEC is created and pushed onto the call stack and when the function finishes execution then the context is popped out.Context

// // Hoisting

// --> So Hoisting is basically the behaviour of js by which all the variables and function declaration moved on the top of their scope during the compilation phase.
// But only the declaration are hosited - not initializations.
        

// Var is hosited but const and let throws Reference errors before declaration
// const and let are hoisted too but they are placed in a temporal dead zone.

// The time betweent the let and const variable is declared and initialized and during this if we accessing the variable then it results into ReferenceError

function outer() {
    let name = "vishal";

    function inner() {
        console.log("Hello " + name);
        
    }
    inner()
}

outer()

for (var i = 0; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
}

// Here var is function scoped so all the iterations of the loop share the same i and when the setTimeout function is called when the loop has finished executing.

for (let i = 0; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
}

// here the let is blocked scope so each iteration gets a new i a fresh binding and each setTimeout captures a differet i and each value is preserved properly in its closure.