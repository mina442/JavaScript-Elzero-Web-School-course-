console.log("Osama" !== "Ahmed");
console.log(typeof "Osama" === typeof "Ahmed");
// التكليف 01
// ضع العلامة المناسبة من ال Operators التي تعلمتها بدلا من علامة الإستفهام لتكون النتيجة True
console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 -100 == 10 != 20); // true
console.log(-10 == "-10"); // true
console.log(+ -50 != +"-40"); // true
console.log(- 10 != -"-40"); // true
console.log(+ "10" == 10); // true
console.log(+ 20 != false); // true
/**
 * حل شات جي بي تي console.log(100 == "100");      // true
console.log(100 < 1000);        // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10");      // true
console.log(+(-50) < +("-40")); // true
console.log(10 < -"-40");       // true
console.log(+"10" === 10);      // true
console.log(20 || false);       // true

 */
// التكليف 02
// لديك متغيرين فيهم رقمين مختلفيين والمطلوب إستعمال ال Operators التي تعلمتها مع المتغيرات لتظهر النتيجة True
// ممنوع إستخدام اي أرقام نهائيا
// يجب إستخدام المتغير مرة واحدة فقط في كل حل
// يجب عدم تكرار ال Operator ويستخدم مرة واحدة في واحد من الحلول
// أقل عدد من الحلول هو 6 حلول
let num1 = 10;
let num2 = 20;

console.log(num1 !=  num2); // true
console.log(num1 !== num2); // true
console.log(num1 <   num2); // true
console.log(num1 <=  num2); // true
console.log(num2 >    num1); // true
console.log(num2 >=  num1); // true
/**
 * حل شات جي بي تي
 * let num1 = 10;
let num2 = 20;

// 1. أكبر من <
console.log(num1 < num2); // true ✅

// 2. ليس مساوٍ !==
console.log(num1 !== num2); // true ✅

// 3. أصغر أو يساوي <= (نعكس الترتيب)
console.log(num2 >= num1); // true ✅

// 4. معامل الجمع + مع التحويل إلى Boolean
console.log((num1 + num2) > num2); // true ✅

// 5. الطرح -
console.log((num2 - num1) > num1 - num1); // true ✅

// 6. القسمة /
console.log((num2 / num1) > (num1 / num2)); // true ✅

 */
// التكليف 03
// لديك ثلاث متغيرات فيهم أرقام مختلفة والمطلوب إستعمال ال Operators التي تعلمتها بدلا من علامة الإستفهام لتظهر النتيجة True
// ممنوع إستخدام اي أرقام نهائيا
let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a < b); // true
console.log(a < b || a > c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true
/**
 * حل شات جي بي تي
 * let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a < b);          // true
console.log(a < b && b > c);                   // true
console.log(!(a == b) && !(a > b) && (a > c) && !!(a > c)); // true

 */
