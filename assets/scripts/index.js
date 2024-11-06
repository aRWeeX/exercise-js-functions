// Level Easy
// Segment 1: Functions with No Parameters and No Return Values
/*
1. Basic Greeting

Create a function called greet that logs the string "Hello, World!" to the console.
*/
function greet() {
  console.log("#1: Hello, World!");
}
greet();
// #1: Hello, World!

/*
2. Favorite Number

Write a function named favoriteNumber that logs your favorite number (e.g., 42) to the console.
*/
function favoriteNumber() {
  console.log("#2: " + 7);
}
favoriteNumber();
// #2: 7

/*
3. Magic Eight Ball

Create a function called magicEightBall that logs a random response from the following list: "Yes", "No", "Maybe", or "Ask again later".
*/
function magicEightBall() {
  const answers = ["Yes", "No", "Maybe", "Ask again later"];
  console.log("#3: " + answers[Math.floor(Math.random() * answers.length)]);
}
magicEightBall();
// #3: Ask again later

/*
4. Current Year

Write a function called getCurrentYear that logs the current year to the console using the Date object.
*/
function getCurrentYear() {
  const date = new Date();
  console.log("#4: " + date);
}
getCurrentYear();
// #4: Tue Nov 05 2024 13:53:49 GMT+0100 (centraleuropeisk normaltid)

/*
5. Random Joke

Create a function called tellJoke that logs a random joke from a predefined list of jokes to the console.
*/
function tellJoke() {
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything",
    "What do you call fake spaghetti? An impasta!",
    "Why did the scarecrow win an award? Because was outstanding in his field!",
    "How do you organize a space party? You planet!",
    "Why don't skeletons fight each other? They don't have the guts!",
  ];
  console.log("#5: " + jokes[Math.floor(Math.random() * jokes.length)]);
}
tellJoke();
// #5: Why did the scarecrow win an award? Because was outstanding in his field!

// Segment 2: Functions with Parameters (One or More)
/*
6. Personalized Greeting

Write a function named personalGreeting that takes a name as a parameter and logs a greeting string (e.g., "Hello, [name]!") to the console.
*/
function personalGreeting(name) {
  console.log(`#6: Hello, ${name}!`);
}
personalGreeting("John");
// #6: Hello, John!

/*
7. Sum of Two Numbers

Create a function called add that takes two numbers as parameters and logs their sum to the console.
*/
function add(num1, num2) {
  console.log(`#7: ${num1 + num2}`);
}
add(2, 5);
// #7: 7

/*
8. Age in Months

Write a function named ageInMonths that takes a person's age in years as a parameter and logs their age in months (e.g., age * 12).
*/
function ageInMonths(ageInYears) {
  console.log(`#8: ${ageInYears * 12}`);
}
ageInMonths(25);
// #8: 300

/*
9. Temperature Converter

Create a function called celsiusToFahrenheit that takes a temperature in Celsius as a parameter and logs the equivalent temperature in Fahrenheit to the console.
*/
function celsiusToFahrenheit(tempC) {
  console.log(`#9: ${tempC * 1.8 + 32}`);
}
celsiusToFahrenheit(12);
// #9: 53.6

/*
10. Full Name

Write a function named getFullName that takes two parameters, firstName and lastName, and logs the full name as a single string (e.g., "John Doe") to the console.
*/
function getFullName(firstName, lastName) {
  console.log(`#10: ${firstName} ${lastName}`);
}
getFullName("John", "Doe");
// #10: John Doe

// Segment 3: Functions with Parameters and Return Values
/*
11. Area of a Rectangle

Create a function called calculateArea that takes the length and width of a rectangle as parameters and logs the area to the console.
*/
function calculateArea(length, width) {
  return length * width;
}
console.log(`#11: ${calculateArea(8, 4)}`);
// #11: 32

/*
12. Find Maximum

Write a function named findMax that takes two numbers as parameters and logs the larger of the two.
*/
function findMax(num1, num2) {
  return Math.max(num1, num2);
}
console.log(`#12: ${findMax(69, 53)}`);
// #12: 69

/*
13. Count Vowels

Create a function called countVowels that takes a string as a parameter and logs the number of vowels (a, e, i, o, u) in that string.
*/
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(`#13: ${countVowels("Monarch")}`);
// #13: 2

/*
14. Discount Price

Write a function named calculateDiscount that takes the original price and the discount percentage as parameters and logs the price after discount to the console.
*/
function calculateDiscount(originalPrice, discountPercentage) {
  discountPercentage = discountPercentage / 100;
  discountPercentage = 1 - discountPercentage;
  return originalPrice * discountPercentage;
}
console.log(`#14: ${calculateDiscount(94, 25)}`);
// #14: 70.5

/*
15. Reverse String

Create a function called reverseString that takes a string as a parameter and logs the string reversed to the console.
*/
function reverseString(str) {
  let reversedStr = "";
  for (let index = str.length - 1; index >= 0; index--) {
    const element = str[index];
    reversedStr += element;
  }
  return reversedStr;
}
console.log(`#15: ${reverseString("Large")}`);
// #15: egraL

// Level Intermediate
/*
1. Palindrome Checker

Write a function called isPalindrome that takes a string as a parameter and returns true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.
*/
function isPalindrome(str) {
  let reversedStr = "";
  for (let index = str.length - 1; index >= 0; index--) {
    const element = str[index];
    reversedStr += element;
  }
  if (str.toLowerCase() === reversedStr.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
console.log(`#1: ${isPalindrome("Ankle")}`);
// #1: false
console.log(`#1: ${isPalindrome("Anna")}`);
// #1: true

/*
2. FizzBuzz

Create a function named fizzBuzz that takes a number as a parameter and returns:
"Fizz" if the number is divisible by 3,
"Buzz" if it is divisible by 5,
"FizzBuzz" if it is divisible by both, and
the number itself if none of these conditions are met.
*/
function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
}
console.log(`#2: ${fizzBuzz(15)}`);
// #2: FizzBuzz
console.log(`#2: ${fizzBuzz(3)}`);
// #2: Fizz
console.log(`#2: ${fizzBuzz(5)}`);
// #2: Buzz
console.log(`#2: ${fizzBuzz(4)}`);
// #2: 4

/*
3. Factorial Calculator

Write a function called factorial that takes a positive integer as a parameter and returns the factorial of that number (e.g., 5! = 5 × 4 × 3 × 2 × 1).
*/
function factorial(posInt) {
  const numbers = [];
  for (let index = 1; index <= posInt; index++) {
    numbers.push(index);
  }
  return numbers.reduce((pre, cur) => {
    return pre * cur;
  }, 1);
}
console.log(`#3: ${factorial(5)}`);
// #3: 120

/*
4. Longest Word

Create a function named findLongestWord that takes a string (a sentence) as a parameter and returns the longest word in that sentence.
*/
function findLongestWord(sentence) {
  const array = sentence.split(" ");
  const longestWord = array.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );
  return longestWord;
}
console.log(
  `#4: ${findLongestWord(
    "For oil spots on the floor, nothing beats parking a motorbike in the lounge."
  )}`
);
// #4: motorbike

/*
5. Array Average

Write a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers.
*/
function calculateAverage(numbersArray) {
  let result = numbersArray.reduce((preV, curV) => preV + curV, 0);
  result /= numbersArray.length;
  return result;
}
console.log(`#5: ${calculateAverage([17, 42, 8, 23, 56])}`);
// #5: 29.2

/*
6. Remove Duplicates

Create a function named removeDuplicates that takes an array as a parameter and returns a new array with duplicate values removed.
*/
function removeDuplicates(array) {
  const newArray = array.filter(
    (element, index) => array.indexOf(element) === index
  );
  return newArray.join(", ");
}
console.log(
  `#6: ${removeDuplicates([
    "product",
    "constituency",
    "add",
    "product",
    "glare",
    "add",
    "deprivation",
  ])}`
);
// #6: product, constituency, add, glare, deprivation

/*
7. Capitalize First Letter

Write a function called capitalizeFirstLetter that takes a string as a parameter and returns the string with the first letter capitalized.
*/
function capitalizeFirstLetter(string) {
  const array = string.split("");
  array[0] = array[0].toUpperCase();
  return array.join("");
}
console.log(`#7: ${capitalizeFirstLetter("expect")}`);
// #7: Expect

/*
8. Count Occurrences

Create a function named countOccurrences that takes a string and a character as parameters and returns the number of times the character appears in the string.
*/
function countOccurrences(str, char) {
  const newArray = Array.from(str)
    .map((c) => (c === char ? 1 : 0))
    .reduce((acc, curr) => acc + curr, 0);
  return newArray;
}
console.log(`#8: ${countOccurrences("element", "e")}`);
// #8: 3

/*
9. Merge Arrays

Write a function called mergeArrays that takes two arrays as parameters and returns a new array that contains all the elements from both arrays, ensuring no duplicates.
*/
function mergeArrays(arr1, arr2) {
  const mergedArray = arr1.concat(arr2);
  const filteredArray = mergedArray.filter(
    (element, index) => mergedArray.indexOf(element) === index
  );
  return filteredArray.join(", ");
}
console.log(
  `#9: ${mergeArrays(
    ["ally", "ally", "awful", "awful", "captain", "baseball", "horizon"],
    ["west", "assessment", "assessment", "spray", "pepper", "floor", "floor"]
  )}`
);
// #9: ally, awful, captain, baseball, horizon, west, assessment, spray, pepper, floor

/*
10. Random Password Generator

Write a function called generatePassword that takes a length as a parameter and returns a randomly generated password of that length, using uppercase letters, lowercase letters, and numbers.
*/
function generatePassword(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let index = 0; index < length; index++) {
    const randomChar = Math.floor(Math.random() * chars.length);
    password += chars[randomChar];
  }
  return password;
}
console.log(`#10: ${generatePassword(20)}`);
// #10: G9pNCs4SNcFODSKSxbYE

/*
11. Character Frequency

Create a function named charFrequency that takes a string as a parameter and returns an object with each character as a key and the number of times it appears in the string as the value.
*/
function charFrequency(str) {
  return [...str].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
}
console.log(`#11: ${JSON.stringify(charFrequency("reputation"))}`);
// #11: {"r":1,"e":1,"p":1,"u":1,"t":2,"a":1,"i":1,"o":1,"n":1}

/*
12. Intersection of Arrays

Write a function called arrayIntersection that takes two arrays as parameters and returns a new array containing only the elements that are present in both arrays.
*/
function arrayIntersection(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}
console.log(
  `#12: ${arrayIntersection(
    [
      "conglomerate",
      "dignity",
      "negative",
      "throat",
      "activate",
      "confine",
      "progress",
    ],
    ["nail", "confine", "silver", "coffee", "progress", "dignity", "activate"]
  ).join(", ")}`
);
// #12: dignity, activate, confine, progress

/*
13. String Reversal

Create a function named reverseWords that takes a string as a parameter and returns the string with the order of the words reversed (e.g., "Hello World" becomes "World Hello").
*/
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(`#13: ${reverseWords("Hello World")}`);
// #13: World Hello

/*
14. Find Minimum

Write a function called findMin that takes an array of numbers as a parameter and returns the smallest number in the array.
*/
function findMin(numbersArray) {
  return numbersArray.reduce((acc, curr) => {
    if (curr < acc) {
      acc = curr;
    }
    return acc;
  }, Infinity);
}
console.log(`#14: ${findMin([17, 42, 8, 23, 56])}`);
// #14: 8
