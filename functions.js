//Given an array of strings, use a function to reverse all the elements in the string in ascending
//order and the specific elements in descending order
function reverseAscending(arr) {
  return arr.sort().map(str => str.split('').reverse().join(''));
}

// Example
const stringsArray = ['hello', 'world', 'apple'];
const reversedArray = reverseAscending(stringsArray);
console.log(reversedArray); 


//Using JS functions and an array of numbers, return positive if an element within the array is positive, 
//negative if an element is negative, else zero
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
    numbers(3,4,5,6,)
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
//Write a function that takes in an array of numbers and consoles the first four items
 //multiplied by 8 andthe last two added by 5. Console the array with the new values
    function valuesArray(arr) {
    let theFour = arr.slice(0, 4).map(item => item * 8);
    let theTwo = arr.slice(-2).map(item => item + 5);
    const newArray = theFour.concat(theTwo);
    console.log(newArray);
   }
   valuesArray([6, 2, 78, 5,2,4,5, 10, 8]);

   //revision2
   function merging(arr1,arr2){
    result=[...arr1,...arr2]
    return result.sort((arr1,arr2) => arr1-arr2);
   }
   let arr1 = [1,2,3,4]
   let arr2 = [5,6,7,8]
   console.log(merging(arr1,arr2))
   

   function myString(String){
    string1 = String.split("").reverse().join("")
    return string1
   }
   console.log(myString("Yvonne"))

   
   function removeDuplicates(x){
    var a = x.split(" ");
    var b =[];
    for (var i in a )
    if (b.indexOf(a[i])==-1) b.push(a[i])
    return b.join(' ')
   }
    let x = ("my man my man my man")
    console.log(removeDuplicates(x))
   




  













