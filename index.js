// var -> function

// let -> block-scoped variable
function sayHello () {
 for (var i = 0; i < 5; i++) {
   console.log("Hello, World!");
 }  
}

sayHello();


let square = number => number * number;
console.log(square(5)); // 25
square = () => 5 * 5 ;


console.log(square()); //25 

const jobs = [
    {id : 1 , isActive : true},
    {id : 2 , isActive : false},
    {id : 3 , isActive : true},
]

const activeJobs = jobs.filter(function(job) {return job.isActive;});

const atctiveJobs2 = jobs.filter(job => job.isActive);

console.log(activeJobs); // [{id : 1 , isActive : true}, {id : 3 , isActive : true}]
console.log(atctiveJobs2); // [{id : 1 , isActive : true


// Arrow functions don't rebind `this`
const person = {   
    name : 'John',

    sayHello : function() {
        console.log(`Hello, my name is ${this.name}`);
    }   
}
person.sayHello(); // Hello, my name is John
const person2 = {   
    name : 'John',

    sayHello : () => {
        console.log(`Hello, my name is ${this.name}`);
    }   
}   

person2.sayHello(); // Hello, my name is undefined