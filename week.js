// 1. How can we use a callback function to calculate the sum of
//  three numbers Asynchronously? ( I want to see the code.)
function summOf(num1,num2,num3,callback){
    const add=num1+num2+num3;
    callback(add)
  }
  function result(add){
    console.log(add)
  }
  summOf(30,2,7,result);


//   2 Create a function called filterArray that takes an array of numbers and a
//    callback function as parameters. The filterArray function should iterate through the array 
//    and apply the callback function to each element. The callback function should determine 
//    whether the element  should be included in the filtered array or not. The filtered array 
//    should then be returned as the result
function filterArray(array, callback) {
    const filteredArray = [];
  
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        filteredArray.push(array[i]);
      }
    }
  
    return filteredArray;
  }
  const array = [1, 2, 3, 4, 5];

function evenNum(number) {
  return number % 2 === 0;
}

const filteredNumbers = filterArray(array, evenNum);
console.log(filteredNumbers); 


// 3. Write a function that does the following:
//  Console logs the numbers from 1 to n where n is the integer the function takes as its parameter      
// Logs fizz instead of the number for multiples of 3 
// Logs buzz instead of the number for multiples of 5
// Logs fizzbuzz for numbers that are multiples of both 3 and 
// Example: fizzBuzz(5)
function number(n) {
    for (let num = 1; num <= n; num++) {
      if (num % 3 === 0 && num % 5 === 0) {
        console.log('fizzbuzz');
      } else if (num % 3 === 0) {
        console.log('fizz');
      } else if (num % 5 === 0) {
        console.log('buzz');
      } else {
        console.log(num);
      }
    }
  }
  number(100);

//   4. Given a string (“welcome to javascript class”), reverse each word in the sentence. 
function reverseWords(sentence) {
    const words = sentence.split(' ');
    const reversedWords = [];
  
    for (let i = 0; i < words.length; i++) {
      const reversedWord = words[i].split('').reverse().join('');
      reversedWords.push(reversedWord);
    }
  
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
  }
const sentence = "welcome to javascript class";
const reversedSentence = reverseWords(sentence);
console.log(reversedSentence);


// 5. Explain what a callback function is and provide an example
//      (Give a brief explanation and the example should be a code)
//     (For the explanation, write it down on visual studio before you start your    
//           code then comment it out)

/* A callback function is a function that is passed as an argument to
 another function. it is "called back" later on when a certain 
 condition is met or an event occur*/
 function add(num,callback){
    callback(num);
}
function nums(num){
    console.log(num+30);
}
add(5,nums)
