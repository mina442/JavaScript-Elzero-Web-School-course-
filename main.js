// التكليف 01
// ممنوع إستخدام الأرقام نهائيا ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
// يجب عمل الحل والمطلوب بطريقتين مختلفتين
// يمكنك كتابة ما تريد خارج ال Console لتنفيذ المطلوب
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(num-num,num)); // ["Ahmed", "Elham", "Osama"]; 

// // Method 2
myFriends.splice(-1, 1);
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// chat gpt
// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// Method 1
console.log(myFriends.slice(myFriends.indexOf("Ahmed"), num)); 

// Method 2
console.log(myFriends.splice(myFriends.indexOf("Ahmed"), num));

// التكليف 02
// ممنوع إستخدام الأرقام نهائيا
// ممنوع إستخدام ال slice Method
// يمكنك كتابة ما تريد خارج ال Console لتنفيذ المطلوب
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
// friends.splice(myFriends.indexOf("Gamal"), -1);
// friends.splice(myFriends.indexOf("Ahmed"), 1);
// console.log(myFriends.indexOf("Ahmed")); // ["Eman", "Osama"]
// console.log(friends); // ["Eman", "Osama"]


// chat gpt
// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();

console.log(friends); // ["Eman", "Osama"]

// التكليف 03
// ممنوع إستخدام الأرقام نهائيا
// يجب كتابة سطر Code واحد فقط لتخرج القيمة المطلوبة
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
 finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
// chat gpt

// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// التكليف 04
// ممنوع إستخدام الأرقام نهائيا ويمكنك إستخدام الرقم 0 فقط
// يجب كتابة سطر Code واحد فقط لتخرج القيمة المطلوبة
// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
// console.log(words[words.length]); // ZERO

// // chat gpt
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
// console.log(words[0][0].slice(words.length).toUpperCase());
// console.log(words[words.length - words.length][words[0].length - words[0].length].slice(words.length).toUpperCase());
// me + chatgpt
console.log(words[words.length + words.indexOf("Elzero", "Web", "School")][words.length - words.length].slice(website.length).toUpperCase());

// [(words.length - words.length)].slice(website.length).toUpperCase());
console.log(words.length)

// التكليف 05
// كل ما عليك هو التأكد أن قيمة متغير needle موجود داخل ال Array المسماه haystack
// يجب عمل الحل بثلاث طرق مختلفة
// قم بطباعة كلمة Found في ال Console إذا كانت الكلمة موجودة
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
// Write 3 Solutions
console.log(haystack.includes(needle));

// chat gpt
// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// Solution 1 (includes)
if (haystack.includes(needle)) console.log("Found");

// Solution 2 (indexOf)
if (haystack.indexOf(needle) !== -1) console.log("Found");
console.log(haystack.some(item => item === needle))
// Solution 3 (some)
if (haystack.some(item => item === needle)) console.log("Found");

// التكليف 06
// قم بكتابة Code فيه ما تعلمته لتخرج النتيجة الموجودة في المثال
// يمنع كتابة اي أرقام نهائيا في اي مكان في الحل
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = 
console.log(allArrs); // fxy

// chat gpt
// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// Your Code Here
// allArrs = arr2[arr2.length - arr2.length].toLowerCase() 
//         + arr1[arr1.length - arr1.length].toLowerCase()
//         + arr2[arr2.length - arr1.length].toLowerCase();
// me+chatgpt
allArrs = arr2[arr2.indexOf("F")].toLowerCase() 
        + arr1[arr1.indexOf("X")].toLowerCase()
        + arr2[arr2.indexOf("Y")].toLowerCase();
console.log(allArrs); // fxy


/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero,my.indexOf("Gamal")).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(my.indexOf("Mazero"),counter).reverse()); // ["Elham", "Mazero"]
let Elzero =   my[my.indexOf("Elham")].slice(zero, my.indexOf("Elham")) +
               my[my.indexOf("Mazero")].slice(my.indexOf("Elham"))
console.log(
Elzero
); // "Elzero"

console.log(
  Elzero[Elzero.indexOf("r")] +
  Elzero[Elzero.indexOf("o")].toUpperCase()
); // "rO"
