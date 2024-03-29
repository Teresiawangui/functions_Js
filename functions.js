//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
function sortArray(){
    let array1 = ["red", "blue", "yellow", "black"];
    console.log(array1.sort());
    console.log(array1.reverse());
}
sortArray()
//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function numbers() {
    let theArr =theArr.forEach(element => {
       if (element > 0) {
         console.log("positive");
       } else if (element < 0) {
         console.log("negative");
       } else {
         console.log("zero");
       }
    });
   }
//Given an array of objects, where each object represents an employee with an id, name, and salary property,
//write a function that returns a new array of employee objects sorted by their salary in ascending order.
let details = [
    { id: 78 },
    { name: "Nancy Kimondo" },
    { salary: [500, 20000, 800, 10000] },
  ];
    details.sort(function(X, Y) {
    return X.salary - (Y.salary);
  });
  details.forEach((person) => console.log(details.salary));
 console.log(details);
//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function multiplication(numbers) {
    numbers.forEach((number) => {
       console.log(number * 2);
    });
   }
   multiplication([7, 5, 1, 8]);
//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 andthe last two added by 5. Console the array with the new values
    function valuesArray(arr) {
    let theFour = arr.slice(0, 4).map(item => item * 8);
    let theTwo = arr.slice(-2).map(item => item + 5);
    const newArray = theFour.concat(theTwo);
    console.log(newArray);
   }
   valuesArray([6, 2, 78, 5, 10, 8]);












