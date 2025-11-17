// التكليف 01
// لديك متغير يحتوي على رقم والمطلوب فحص الرقم وعمل اللازم بناء على الشروط
// إذا كان الرقم أصغر من 10 قم بطباعة الرقم وقبله صفرين
// إذا كان الرقم أكبر من 10 وأصغر من 100 قم بطباعة الرقم وقبله صفر
// إذا كان الرقم أكبر من أو يساوي 100 قم بطباعة الرقم كما هو
// Test Case 1
let num = 9; // "009"
if (num < 10) {
  console.log(("00"+num));
}
// Test Case 2
let num12 = 20; // "020"
if (num12 > 10 && num12 < 100) {
  console.log(("0"+num12));
}
// Test Case 3
let num13 = 110; // "110"
if (num13 > 100) {
  console.log(num13);
}
/**
 * حل شات جي بي تي
 * let num = 9;

if (num < 10) {
  console.log(`00${num}`);
} else if (num >= 10 && num < 100) {
  console.log(`0${num}`);
} else {
  console.log(`${num}`);
}
console.log(num < 10 ? `00${num}` : num < 100 ? `0${num}` : `${num}`);
 */
// التكليف 02
// لديك ثلاث متغيرات والمطلوب فحص الشروط التالية وإظهار الرسالة بنفس شكل ال Output في المثال
// السطر الأول إذا كانت قيمة المتغير الأول هي نفس قيمة المتغير الثاني
// السطر الثاني إذا كانت قيمة المتغير الأول هي نفس قيمة المتغير الثاني ولكن النوع مختلف
// السطر الثالث إذا كانت قيمة المتغير الأول ليست نفس قيمة المتغير الثالث وليست ايضا نفس النوع
// السطر الرابع إذا كانت قيمة المتغير الثاني لا تساوي المتغير الثالث ولكنهم نفس النوع
// يجب فحص نوع البيانات والقيمة بنفسك لأن البيانات يمكن ان يتغير نوعها وقيمتها
let num14 = 9;
let str = "9";
let str2 = "20";

// Output

if(num14 == str)  
{
  console.log(`${num14} Is The Same Value As ${str}`);
}


// 1️⃣ إذا كانت قيمة المتغير الأول هي نفس قيمة المتغير الثاني
// if (num1 == str) {
//   console.log(`${num1} Is The Same Value As ${str}`);
// }

if(num14 == str && typeof num14 !== str ) {
  console.log(`${num14} Is The Same Value As ${str} But Not The Same Type`);
  
}
// 2️⃣ إذا كانت نفس القيمة لكن النوع مختلف
// if (num1 == str && num1 !== str) {
//   console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
// }

if(num14 != str2 && typeof num14 !== typeof str2 ) {
  console.log(`${num14} Is Not The Same Value Or The Same Type As ${str2}`);
  
}
// 3️⃣ إذا كانت القيمة والنوع مختلفين عن المتغير الثالث
// if (num1 !== str2 && typeof num1 !== typeof str2) {
//   console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
// }

if (str !== str2 && typeof str === typeof str2) {
  console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
  
}
// 4️⃣ إذا كانت القيمة مختلفة ولكن النوع نفسه بين الثاني والثالث
// if (str !== str2 && typeof str === typeof str2) {
//   console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
// }




// التكليف 03
// لديك ثلاث متغيرات والمطلوب فحص الشروط التالية وإظهار الرسالة بنفس شكل ال Output في المثال
// يجب عمل جميع الحلول ب If Condition واحدة
// السطر الأول تأكد أن المتغير الثالث أكبر من الأول ولا يساوي الثاني في النوع
// السطر الثاني تأكد أن المتغير الثالث أكبر من الأول ومساوي للثاني في القيمة ولا يساوي الثاني في النوع
// السطر الثالث تأكد أن قيمة المتغير الثالث لا تساوي الأول من ناحية القيمة والنوع ولا تساوي الثاني من ناحية النوع
// يجب فحص نوع البيانات والقيمة بنفسك لأن البيانات يمكن ان يتغير نوعها وقيمتها
let num15 = 10;
let num26 = 30;
let num37 = "30";

// Needed Output
if (+num37 > num15 && typeof num15 !== typeof num37) {
  console.log(`${num37} Is Larger Than ${num15} And Type string Not The Same Type As number`);
  
}if (+num37 > num15 && num26 == num37 && typeof num26 !== typeof num37) {
  console.log(`${num37} Is Larger Than ${num15} And Value Is The Same As ${num26} And Type string Not The Same Type As number`);
  
}if (num37 !== num15 && typeof num15 !== typeof 'num26') {
  console.log(`${num37} Value And Type Is Not The Same As ${num15} And Type Is Not The Same As ${num26}`);
  
}


// if (num3 > num1 && typeof num3 !== typeof num2) {
//   console.log(`${num3} Is Larger Than ${num1} And Type ${typeof num3} Not The Same Type As ${typeof num2}`);
// } else if (num3 > num1 && num3 == num2 && typeof num3 !== typeof num2) {
//   console.log(`${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type ${typeof num3} Not The Same Type As ${typeof num2}`);
// } else if (num3 !== num1 && typeof num3 !== typeof num1 && typeof num3 !== typeof num2) {
//   console.log(`${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`);
// }



// التكليف 04
// قم بتغيير محتوى المتغيرات لما هو مناسب لتكون جميع نتائج ال Conditions هي True ولا تقم أبدا بتعديل ال If Condition نفسه
// // Edit What You Want Here

let num1 = 10;
let num2 = 10;
let num3 = "10";
let num4 = 20;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 >= num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 >= num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 >= num2 && num1 !== num3)
// if (num1 >= num2 && num1 === +num3)
{
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) <= num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + +num3) <= num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) > num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 !== 21) {
  console.log("True");
} else {
  console.log("False");
}
/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}
let result =
  a < 10 ? 10 :
    a >= 10 && a <= 40 ? "10 To 40" :
      a > 40 ? "> 40" : "Unknown";
    // chat gpt
// let result1 =
//   a < 10 ? 10 :
//   (a >= 10 && a <= 40) ? "10 To 40" :
//    a > 40 ? "> 40" :
//   "Unknown";
console.log(result);
// console.log(result1);

// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";
// جزد من السؤال 
if (`${st.length*2}` === "34") {
  console.log("Good");
}
// chat gpt
// (st.length * 2).toString()


// W Position May Change
// if ("????" === "w") {
//   console.log("Good");
// }
// cht gpt
// if (st.toLowerCase()[st.toLowerCase().indexOf("w")] === "w") {
//   console.log("Good");
// }


if (typeof st.length !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if ("????" === "ElzeroElzero") {
  console.log("Good");
}
// chat gpt
// if (st.slice(0, 6) + st.slice(0, 6) === "ElzeroElzero") {
//   console.log("Good");
// }



// let price =0;

// console.log(`The Price Is ${price || 200}`);
// console.log(`The Price Is ${price ?? 200}`);
