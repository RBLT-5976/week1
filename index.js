console.log('Hello World, Node.js!');

var dataList = [1, 2, 3, 4, 5];
console.log(dataList);

dataList.push(6); // add at the end 
console.log(dataList);

dataList.unshift(0); // add to the top 
console.log(dataList);

//Add an item after the 3rd item in the array (splice)
dataList.splice(3, 0, 555);
console.log(dataList);

//Remove the last number from the array (pop)
var popData = dataList.pop();
console.log(popData);
console.log(dataList);
console.log('myData: %O', dataList);

// Remove the 2nd number from the array (splice)
dataList.splice(1, 1);
console.log(dataList);

// Edit the 5th element in the array to have a value of 100
dataList.splice(4, 1, 100);
console.log(dataList);


// dataList.sort();
// console.log(dataList);

dataList.sort(function(a, b) {
    return a - b
});

console.log(dataList);


//Task 3 – Working with JSON
const myObj = [{
        firstName: "John",
        lastName: "Doe"
    },
    {
        firstName: "Anna",
        lastName: "Smith"
    },
    {
        firstName: "Peter",
        lastName: "Jones"
    }
];

// myObj is a javascript object
console.log(typeof(myObj));

//Output the object to the console
console.log(myObj);


const myObjStr = JSON.stringify(myObj);

console.log("myObjStr" + myObjStr);

// Convert the JSON string back into a javascript object (parse)
// Output the object to the console.
console.log(JSON.parse(myObjStr));

const arrayAdd = require('array-add-num');
console.log("Sum of Array is " + arrayAdd([5, 4, 3, 8]));


//Task 5
//declarative function
function multiplyNums(x, y, z) {
    return "new number is " + x * y * z;
}
console.log(multiplyNums(1, 2, 3));

//function expression
var multiplyNumsEs5 = function(x, y, z) {
    return "new number is " + x * y * z;
}
console.log(multiplyNumsEs5(1, 2, 3));

//use arrow syntax
multiplyNumsEs6 = (x, y, z) => { return "new number is " + x * y * z; }
console.log(multiplyNumsEs6(1, 2, 3));