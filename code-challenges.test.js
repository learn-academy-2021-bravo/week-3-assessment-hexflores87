// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// The first step I want to do is create a function. 
// The first step to creating a function is to declare a variable- example const.
// Second step is to create a function name which allows us to call on the function.

const numsGreat = (num) => { // call numsGreat with value greater than 1
    if (num<2)
        return num;
    let arr = Array(num); // create an empty with a size of number passed in
    arr[0]=1; // set first element to 1.
    arr[1]=1; // set second element to 1.

    // for 2 to num less 1 do the following
    for (i=2;i<num;i++)
    {
        // current array element is equal the sum of the prior two
        arr[i]=arr[i-1]+arr[i-2];
    }
    return arr; // return array
}
let arr2 = numsGreat(2);
console.log(arr2);
let arr6 = numsGreat(6);
console.log(arr6);
let arr10 = numsGreat(10);
console.log(arr10);
// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]





// b) Create the function that makes the test pass.
/*
fdescribe("sortedOddNums", () =>{

    it("returns only sorted odd numbers", () =>{
        expect(sortedOddNums( fullArr1)).toEqual([-9, 7, 9, 199])
        expect(sortedOddNums( fullArr2)).toEqual([-823, 7, 23])
    })
})

*/

// 


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// declare a var of a test array 
//declare a function called onlyOdd
// takes in an array as an argument
// Returns a NEW array with all odd numbers sorted from least to greatest.

// call and test function using Jest. 

var testArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]; //declare a var of test array
//expected output = [-9, 7, 9, 199] 
function sortedOddNums(arr) // call function sortedOddNums with array
{
    // create and initialize new array for sorted odd numbers to return.
    let retArr=[];
    // for each number in the passed in array:
    for (let i in arr)
    {
        let val = arr[i]; // get value at index in array
        // if is an integer:
        if (Number.isInteger(val)) 
        {
            val = parseInt(val); // convert value to integer
            // if odd number:
            if (val % 2 != 0) 
            {
                console.log("push: "+val);
                // add it to the new array to return.
                retArr.push(parseInt(val));
            }
        }
    }
    // sort and return new array.
    return retArr.sort((a,b)=>{return a-b;});;
}
let values = sortedOddNums(testArr);
console.log(values);




/*
const onlyOdd = (arr) => {
    var newArr = []
    for(let i=0; i< arr.length; i++){
        if(arr[i] % 2 != 0){
            newArr.push(arr[i])
        }
    }
    return newArr
}



//var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

var testArr2 =  ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]
   
function onlyOdd2(arr){
    var newArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 != 0){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(onlyOdd(testArr));

*/



// b) Create the function that makes the test pass.





// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
function accumArraySum (arr) // call accumArraySum with array
{
    if (arr.length<1) // if array is empty return empty array
        return arr;
    let retArr = Array(arr.length); // create return array of same size as passed in array
    let sum = 0; // create and initialize sum to 0.
    // for each number in passed in array:
    for (let i in arr)
    {
        sum += arr[i]; // sum each number
        retArr[i]=sum; // add sum to same index element in return array.
    }
    return retArr; // return new array.
}
var numbersToAdd1 = [2, 4, 45, 9];
let sumArr=accumArraySum(numbersToAdd1);
console.log(sumArr);
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
sumArr=accumArraySum(numbersToAdd2);
console.log(sumArr);
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
sumArr=accumArraySum(numbersToAdd3);
console.log(sumArr);
// Expected output: []





// b) Create the function that makes the test pass.
