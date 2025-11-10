/*التكليف 01
لديك متغير يحتوي على String
المطلوب جلب أول حرف من ال String
يجب تنفيذ الحل ب 6 طرق مختلفة
يجب عدم تكرار اي حل ويجب إستعمال المتغير فقط
يجب التأكد أن الحرف صغير Small Letter
واحد من الحلول تأكد أنه يقوم بتكرار الحرف المأخوذ 3 مرات*/
let userName = "Elzero";
console.log(userName.trim().charAt(0).toLowerCase()); // e
console.log(userName[0].toLowerCase().repeat(3)); // eee
console.log(userName.slice(0,1).toLowerCase());
console.log(userName.slice(-6,-5).toLowerCase());
// console.log(a.split(0).toLowerCase());
console.log(userName[0].toLowerCase()); // e
/**
 * حل شات جي بي تي
 * let userName = "Elzero";

// المطلوب: جلب أول حرف صغير من السترينغ بـ 6 طرق مختلفة

console.log(userName[0].toLowerCase());          // e
console.log(userName.charAt(0).toLowerCase());   // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.at(0).toLowerCase());       // e
console.log(userName[0].toLowerCase().repeat(3)); // ee
 */
/*
التكليف 02
لديك بعض المتغيرات عبارة عن كلمة ومجموعة حروف
في السطر الأول تأكد أن الحرف Z موجود داخل الكلمة وان النتيجة التي ستخرج هي true
في السطر الثاني تأكد أن الكلمة تبدا بالحرف E وأن النتيجة التي ستخرج هي true
في السطر الثالث تأكد أن الكلمة تنتهي بالحرف o وأن النتيجة التي ستخرج هي true
لاحظ حالة الأحرف Capital And Small
غير مسموح التلاعب بالمتغيرات
*/
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
/**
 * حل شات جي بي تي 
 * let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

// 1. التأكد أن الحرف z موجود داخل الكلمة
console.log(word.toLowerCase().includes(letterZ.toLowerCase())); // True

// 2. التأكد أن الكلمة تبدأ بـ e
console.log(word.toLowerCase().startsWith(letterE.toLowerCase())); // True

// 3. التأكد أن الكلمة تنتهي بـ o
console.log(word.toLowerCase().endsWith(letterO.toLowerCase())); // True

 */
/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.substring(2,3).toUpperCase()+a.substring(3,6)); // Zero
console.log(a.slice(2, 3).toUpperCase()+a.slice(3, 6)); // Zero
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero✔️✔️


// 8 H
console.log(a.substring(13,14).repeat(8)); // HHHHHHHH

// Return Array
 console.log(a.split(" ",1));//  ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(); // eLZERO WEB SCHOOl
