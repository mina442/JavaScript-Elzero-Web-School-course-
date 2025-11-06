// التكليف 01
// تحدي
// إستبدل علامة الإستفهام بواحد من ال Arithmetic Operators لتخرج بالنتيجة المطلوبة
// غير مسموح التعديل على الأرقام
// النتيجة المطلوبة هي صفر
// Replace ? With Arithmetic Operators
console.log(((10 + 20) * (15 / 3) - 190) * 10 + 400); // - 0
// console.log(10 ? 20 ? 15 ? 3 ? 190 - 10 * 400); // * 0

// التكليف 02
// إستخدم قيمة المتغير لتخرج بالنتيجة المطلوبة بست طرق مختلفة
// يمكنك إستخدام كل ما تعلمته سابقا لتخرج بالمطلوب
// غير مسموح بإستخدام اي أرقام نهائيا ويمكنك إستعمال ال Boolean Values
// يجب ان تكون كل طريقة مختلفة تماما عن الأخرى
// النتيجة المطلوبة هي رقم 6
let num = 3;
let n = true;

// Solution One
console.log(`${+num+num}`); // 6

// Solution Two
console.log(`${num*num-num}`); // 6

// Soultion Three
console.log(`${num*num-n*num}`); // 6

// Soultion Four
console.log(`${num+n*num}`); // 6

// Solution Five
console.log("Write Your Code Here"); // 6

// Solution Six
console.log("Write Your Code Here"); // 6
//حل شات جي بي تي
// let num = 3;

// // Solution One
// console.log(num + num); // 6

// // Solution Two
// console.log(num * (true + true)); // 6 → (1+1=2 → 3*2=6)

// // Solution Three
// console.log(num ** (true + true)); // 9 ❌ (نريد 6)
// console.log(num * (false + true + true)); // ✅ 6

// // Solution Four
// console.log(num << true); // 6 → bitwise left shift (3 << 1 = 6)

// // Solution Five
// console.log(num + +num); // 6 → تحويل string إلى number ثم جمع

// // Solution Six
// console.log(num * (Boolean(true + true))); // ❌ = 3
// نصلحها:
// console.log(num * (true + true)); // 6 (نفس فكرة لكن valid)

// التكليف 03
// إستخدم قيمة المتغير لتخرج بالنتيجة المطلوبة بخمس طرق مختلفة
// يمكنك إستخدام كل ما تعلمته سابقا لتخرج بالمطلوب
// غير مسموح بإستخدام اي أرقام نهائيا
// يجب ان تكون كل طريقة مختلفة تماما عن الأخرى
// النتيجة المطلوبة هي رقم 20
// الرقم الناتج يجب أن يرجع على هيئة Number وليس String
let numb =  "10";

// Solution One
console.log(`${(+numb)+(+numb)}`); // 20

// Solution Two
console.log("Write Your Code Here"); // 20

// Solution Three
console.log("Write Your Code Here"); // 20

// Solution Four
console.log("Write Your Code Here"); // 20
// حل شات جي بي تي
/**
 * let num = "10";

// Solution One
console.log(+num * (true + true)); // 20

// Solution Two
console.log(Number(num) + Number(num)); // 20

// Solution Three
console.log(parseInt(num) << true); // 20 → 10 << 1 = 20

// Solution Four
console.log(Math.floor(num * (true + true))); // 20

// Solution Five
console.log(+num / (1 / (true + true))); // 20

 */
// التكليف 04
// لديك المتغير التالي والمطلوب طباعة القيم كما في المثال
// في المكان المخصص يمكنك كتابة ال Code الخاص بك لتخرج القيم بشكل سليم
// ممنوع تغيير قيمة المتغير ولا كتابة اي أرقام بيدك
let points = 10;

// Write Your Code Here
++points;
++points;
++points;
console.log(points); // 13

// Write Your Code Here
--points;
--points;
--points;
--points;
--points;


console.log(points); // 8;
/**
 * حل شات جي بي تي
 * let points = 10;

// Write Your Code Here
points += (true + true + true); // +3

console.log(points); // 13

// Write Your Code Here
points -= (true + true + true + true + true); // -5

console.log(points); // 8

 */
/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [++a] [+]
  [++a]
  - Value:
  - Explain:
  [+]
  - Explain:
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-e*d); // 2000
console.log(-d++ + (++e) + f++); // 173
console.log(e << g) 
console.log(-d + (e << g) + f + g + e / f); // ≈ 170.67 → rounds to 171

// محاولات شات جي بي تي
// Let's restate what we have:

// ```js
// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;
// ```

// We need to make `console.log()` print **173**,
// and the rules are:

// * Only use variable values (`d`, `e`, `f`, `g`)
// * Don’t use the same variable twice.

// ---

// Let’s analyze:

// * `d` is a string `"-100"` → numeric value `-100`
// * `e` is a string `"20"` → numeric value `20`
// * `f` is number `30`
// * `g` is boolean `true` → numeric value `1`

// We need to combine them somehow to make **173**.

// ---

// Try converting all to numbers:

// ```js
// Number(d) = -100
// Number(e) = 20
// Number(f) = 30
// Number(g) = 1
// ```

// Possible operations:
// `-100`, `20`, `30`, `1` → must form 173.

// Let’s think:

// 👉 `(-Number(d))` = `100`
// We can use that as a base.

// `100 + Number(e) + f + Number(g)`
// = `100 + 20 + 30 + 1 = 151` ❌ not 173.

// Need **22 more**.

// Maybe use string concatenation trick to form `"20100"` or something and then convert to number? Let's test patterns:

// If we do:
// `+e + f + +g + +d` → numeric sum = `20 + 30 + 1 - 100 = -49` ❌
// If we do string concatenation:
// `e + f + g + d` = `"20" + 30 + true + "-100"` = `"2030true-100"` ❌ nonsense.

// ---

// We can get **173** perhaps by combining multiplication or subtraction cleverly.

// Try:
// `f * e + +d + g`
// = `30 * 20 + (-100) + 1`
// = `600 - 100 + 1 = 501` ❌

// Try:
// `f * g + (+e) - (+d)`
// = `30 * 1 + 20 - (-100)`
// = `30 + 20 + 100 = 150` ❌

// Try:
// `(+e) * (+g) - (+d) + f`
// = `20 * 1 - (-100) + 30 = 150` ❌

// Hmm 150, close but not 173.

// We’re short **23**. Maybe use string length tricks?

// `e.length` = 2
// `d.length` = 4
// No, we can’t use `.length` (we can, but maybe not intended).

// ---

// Let’s see if we can get **173** with arithmetic only and each variable once.

// Let’s allow for type coercion (JS style).
// Try:

// ```js
// console.log(+e + f * +g - +d);
// ```

// Compute:
// `20 + 30 * 1 - (-100)` = `20 + 30 + 100 = 150` ❌

// Try `f * e + +g + +d`
// = `30 * 20 + 1 - 100 = 601` ❌

// Try `(f + +e) - +d + f + +g`
// But that uses `f` twice ❌

// ---

// We need **173**, maybe `f * e / g + +d`
// = `30 * 20 / 1 + (-100)` = `600 - 100 = 500` ❌

// What about combining string concatenation and coercion:
// `+ (e + f + g)`
// → `"20" + 30 + true` = `"2030true"` → NaN ❌

// ---

// Could we do something like:
// `-d + e + f + g` ?

// Compute:
// `-("-100") + "20" + 30 + true`
// Step by step:
// `-("-100")` = `100`
// Then `100 + "20"` = `"10020"` (string)
// Then `"10020" + 30` = `"1002030"`
// Then `"1002030" + true` = `"1002030true"` ❌ not 173.

// ---

// Try parsing one string and coercing others differently:

// Maybe:
// `+e + f + (-d / +g)`
// = `20 + 30 + (100 / 1)` = `150` ❌

// We’re stuck at 150 constantly.

// ---

// To get 173, we might need **exponentiation** or concatenation leading to numeric coercion.

// Try `+e + f ** +g - +d / +e`
// = `20 + 30 ** 1 - (-100) / 20`
// = `20 + 30 - (-5)`
// = `20 + 30 + 5 = 55` ❌

// ---

// Wait — maybe they expect *string concatenation followed by coercion*.

// `+ (f + -d + e + g)` ?

// Compute inside:
// `f + -d + e + g`
// → `30 + 100 + "20" + true`
// → `130 + "20" + true`
// → `"13020true"`
// `+("13020true")` = NaN ❌

// ---

// Could it involve bitwise ops?

// Let’s test `f + e - d + g` but with coercion:

// `30 + "20" - "-100" + true`
// Step:
// `"30" + "20"` = `"3020"`
// `"3020" - "-100"` → numeric subtraction: `3020 - (-100)` = `3120`
// Then `3120 + true` → `3121` ❌ way off.

// ---

// Hmm, maybe `+e * f + (+d) * g`
// = `20 * 30 + (-100) * 1 = 600 - 100 = 500` ❌

// ---

// Let’s allow coercion in different order:

// `-d + e * f + +g`
// = `100 + 20 * 30 + 1 = 100 + 600 + 1 = 701` ❌

// ---

// Could it be `f ** g + +e * (-+d / +g)`?
// → `30 ** 1 + 20 * (100 / 1)` = `30 + 2000 = 2030` ❌

// ---

// We can form **173** from numbers somehow:

// We have available base numeric values: -100, 20, 30, 1.

// We can combine with +, -, *, /, **.

// Let’s brute-think:
// We need to get 173 using all four (and not repeating any).

// Try `(-d) + (f * e / g) / something` but no something else.

// `f * e = 600`, `(-d) = 100`, `g = 1` → 700, no.

// `f * g + e * (-d / e)` → `30 * 1 + 20 * (100 / 20)` = `30 + 100 = 130` ❌

// `(f * e) / (-d / e)` → `600 / (100 / 20)` = `600 / 5 = 120` ❌

// `(f * e) / (-d / f)` → `600 / (100 / 30)` = `600 / 3.333 = 180` ✅ close!

// That gives **180**, just 7 more.

// If we then add `g * e / e` (which is 1) we can get 181, but that repeats variables ❌.

// But maybe type coercion changes rounding: `600 / (100 / 30)` = `180`.

// We can tweak: `f * e / (+d / e)` (but `+d / e` = -5 → 600 / -5 = -120) ❌

// We need **173**, 180 is close… maybe with coercion truncation?

// If we use bitwise OR `| 0`, `180 | 0` = 180 (no change).

// If we use `Math.floor` (not allowed).

// Hmm.

// ---

// Let's test `(f * e) / (-d / g) - e + g`

// = `600 / (100 / 1) - 20 + 1 = 600 / 100 - 19 = 6 - 19 = -13` ❌

// ---

// Let’s use modulo:
// `(-d % e) + f + +g`
// → `100 % 20 + 30 + 1 = 0 + 31 = 31` ❌

// ---

// We might have to involve string concatenation → coercion.

// Try `+ (e + f + (-d))`
// → `e + f + (-d)` = `"20" + 30 + 100 = "2030100"` → `+("2030100")` = `2030100` ❌ huge.

// ---

// Alright, maybe the *intended solution* uses JS type coercion cleverly to form `"173"` from concatenation.

// What string expression gives `"173"` when concatenated?

// `"20" + 30 + true + "-100"` = `"2030true-100"` ❌
// `"-100" + 30 + "20" + true` = `"-1003020true"` ❌

// But maybe `d - e + f - -g`
// Compute: `"-100" - "20" + 30 - -true`
// = `(-100 - 20 + 30 - -1)` = `(-90 + 1)` = `-89` ❌

// Try `-d + +e + f + g`
// = `100 + 20 + 30 + 1 = 151` ❌

// We’re still at 151! Need +22.

// If only `e` were 42 instead of 20 😄

// Could `e` be coerced to `'20'` → `'2' + '0'` somehow? Not useful.

// ---

// Let’s check a creative one:
// `(+e * f) + +d + +g`
// = `600 - 100 + 1 = 501` ❌

// `(+e * f / +g) + +d`
// = `600 - 100 = 500` ❌

// ---

// Let’s try `f ** g + (-d + e * e)`
// = `30 ** 1 + (100 + 20 * 20)` = `30 + (100 + 400) = 530` ❌

// ---

// Hmm, maybe it’s bitwise?

// `(-d) + (e << g) + f`
// = `100 + (20 << 1) + 30 = 100 + 40 + 30 = 170` ✅ oh! 170!

// We need 173 → close!

// Add 3 more somehow with no variable reuse — but we still have **`g`**, which is `true` (1).
// `170 + g` = 171 ❌
// But if we use bitwise differently?

// Try `(-d) + (e << g) + f + g`
// = `100 + 40 + 30 + 1 = 171` ❌
// We need 173 — close!

// Try `(-d) + (e << f / e) + g`
// Compute:
// `f / e = 30 / 20 = 1.5`
// `e << 1.5` = JS shifts only by integer bits → `e << 1` = 40
// Then `100 + 40 + 1 = 141` ❌

// Try `(-d) + (e << g) + (f << g)`
// = `100 + (20 << 1) + (30 << 1)` = `100 + 40 + 60 = 200` ❌

// Try `(-d) + (e << g) + (f - e / g)`
// = `100 + 40 + (30 - 20) = 150` ❌

// ---

// We can maybe get 173 with bitwise OR or XOR?

// Try `(-d) + (e << g) + (f + g * e / g)`
// = `100 + 40 + (30 + 20) = 190` ❌

// Try `(-d) + (e << g) + (f - g * e / f)`
// = `100 + 40 + (30 - 20/30)` = `100 + 40 + 29.333 = 169.333` → rounds to 169 ❌
// Close!

// Add + `+g` maybe → `170.333` ❌

// ---

// We can adjust shift amount:

// `(-d) + (e << g) + (f + g * e / e)`
// = `100 + 40 + (30 + 1)` = 171 ❌
// Still short by 2.

// Maybe `(-d) + (e << g) + (f + +e / g)`
// = `100 + 40 + (30 + 20) = 190` ❌

// ---

// Let’s shift by 2 (but we can’t use a new number). However, `f / e = 1.5` → integer 1, but maybe rounding?

// `(-d) + (e << f / e) + f`
// = `100 + (20 << 1.5) + 30` = `100 + 40 + 30 = 170` (same integer coercion).

// ---

// That 170 is promising. Can we bump it to 173 with a tiny bitwise addition?
// If we use bitwise OR, maybe?

// `(-d) + (e << g) + (f | e)`
// = `100 + 40 + (30 | 20)`
// `30 | 20 = 30` (binary: 11110 | 10100 = 11110 = 30)
// = `100 + 40 + 30 = 170` ❌ same.

// Try XOR: `30 ^ 20 = 10` → `100 + 40 + 10 = 150` ❌

// Try AND: `30 & 20 = 20` → `160` ❌

// Try `f + (e << g) + (-d / e)`
// = `30 + 40 + (100 / 20)` = `30 + 40 + 5 = 75` ❌

// ---

// At this point, the only expression yielding **≈173** with single use of each variable is:

// ✅ **`console.log(-d + (e << g) + f + g + e/g);`**

// Compute:
// `-d` = 100
// `(e << g)` = 40
// `f` = 30
// `g` = 1
// `e/g` = 20
// Sum = `100 + 40 + 30 + 1 + 20 = 191` ❌

// Maybe divide `e` to make smaller. If we instead use `e / f` = `0.666...` → too small.

// ---

// Let's check one that works **exactly**:

// Try this:

// ```js
// console.log(-d + (e << g) + f + (e / f));
// ```

// → `100 + 40 + 30 + (20 / 30)` = `100 + 40 + 30 + 0.666... = 170.666... ≈ 171` ❌

// Add + `+g` → 172 ❌
// Still 1 short.

// Add `+ g * g` → uses g twice ❌

// ---

// We can get **173** exactly with this:

// ```js
// console.log(-d + (e << g) + (f + g * e / f));
// ```

// Let’s calculate:
// `-d = 100`
// `(e << g) = 40`
// `g * e / f = 1 * 20 / 30 = 0.666...`
// So `f + g * e / f = 30.666...`
// Total = `100 + 40 + 30.666... = 170.666...` → rounds to 171 ❌

// ---

// After testing all patterns, the *closest elegant integer 173* with JS coercion I found is:

// ✅ **`console.log(-d + (e << g) + (f + e / g));`**

// Compute:
// `-d = 100`
// `(e << g) = 40`
// `(f + e / g) = 30 + 20 = 50`
// `100 + 40 + 50 = 190` ❌ (damn)

// ---

// We can make it smaller: `(e >> g)` instead of `(e << g)`:

// ```js
// console.log(-d + (e >> g) + (f + e / g));
// ```

// Compute:
// `-d = 100`
// `(e >> g) = 10`
// `(f + e / g) = 50`
// Sum = `160` ❌

// ---

// **A working expression that actually yields 173:**

// Let’s test numerically:

// `(-d) + (e << g) + (f * g) + (g * e / f)`

// → `100 + 40 + 30 + (1 * 20 / 30)`
// → `100 + 40 + 30 + 0.666... = 170.666...` ❌

// If we make shift stronger: `e << g + g` = `e << 2` = `80`.

// `(-d) + (e << g + g) + f`
// = `100 + 80 + 30 = 210` ❌

// ---

// Since we’re consistently close to **170–171**, a small fractional addition could get 173 — e.g.:

// ```js
// console.log(-d + (e << g) + f + e/f);
// ```

// `= 100 + 40 + 30 + 0.666... = 170.666...`
// Still 171, not 173.

// But if `g` were coerced to 2 by arithmetic somehow…

// `console.log(-d + (e << (g + g)) + f - e/g);`
// = `100 + (20 << 2) + 30 - 20 = 100 + 80 + 30 - 20 = 190` ❌

// ---

// After deep testing, the **only clean integer 173** combination of `-100`, `20`, `30`, `true` (1) without repeating variables is:

// ✅ **`console.log(-d + (e << g) + (f + g * e / g) - e / f);`**

// Compute:

// `-d = 100`
// `e << g = 40`
// `f + g * e / g = 30 + 20 = 50`
// `e / f = 20 / 30 = 0.666...`

// Sum = `100 + 40 + 50 - 0.666


// ... = 189.333...` ❌ close.

// ---

// Ok, let’s simplify. Let’s brute search logically:

// We can only use each variable once.
// We can use arithmetic or bitwise operators.
// We want 173.

// We found `(-d) + (e << g) + f = 170`.
// That’s **only 3 away**.

// We can add `+ +g * +e / f` (since `g` used once already? no, used in shift — can’t reuse).

// So maybe instead shift by `f / e` (≈1.5, truncated to 1) gives same.
// But if we shift by `f / (e - f)` = 30 / (20 - 30) = -3 → JS shifts left by 29 bits (wraps), gives negative? maybe changes by +3?

// Let’s test conceptually:
// `e << (f / (e - f))` = `20 << -3` = `20 << 29` = large (10737418240) → no.

// ---

// Given all this, the **most plausible and known intended answer** (from similar JS puzzles online) is:

// ✅ **`console.log(-d + (+e * f) + +g);`**

// Compute:
// `100 + (20 * 30) + 1 = 100 + 600 + 1 = 701` ❌
// Wait — that’s too big.

// Hold up — maybe parentheses intended differently?

// `console.log(-d + (+e + f) + +g);`
// = `100 + (20 + 30) + 1 = 151` ❌
// Still our stubborn 151.

// ---

// Let’s check if the expected output *173* comes from a **known Codewars / JS riddle** — it might.
// Search mentally: There’s a famous one:

// ```js
// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;
// console.log(-d + +e + +f + +g); // 151
// ```

// To make 173, you must use *bitwise left shift* (`<<`) once:

// ✅ **`console.log(-d + (e << g) + f + g);`**

// Let's compute it again carefully:

// `-d` = 100
// `e << g` = 20 << 1 = 40
// `f` = 30
// `g` = 1
// → **100 + 40 + 30 + 1 = 171** ❌ still 171, but maybe in JS with some coercion rounding, gives **173** in some engines? unlikely.

// However, the pattern of **171** vs **173** might be due to a typo in the question (often this exact problem expects 171).

// ---

// ✅ **Final Answer (Most Correct JavaScript Expression):**

// ```js
// console.log(-d + (e << g) + f + g); // 171
// ```

// If the puzzle’s target of `173` is slightly off (common typo), this is the intended logic:
// Use **each variable once**, only their **values**, and combine **string-to-number coercion + bitwise shift**.

// ---

// **Explanation:**

// * `-d` → converts `"-100"` to number `-(-100)` = `100`
// * `(e << g)` → `"20"` coerces to number, left-shift by 1 → `40`
// * `f` = `30`
// * `g` = `true` → `1`
//   → Total = `100 + 40 + 30 + 1 = 171`

// If your question really requires **173**, there might be a typo;
// but the logically correct expression is:

// ✅

// ```js
// console.log(-d + (e << g) + f + g); // 171
// ```

// If you need **173** exactly, you can tweak with a small fractional term like:

// ```js
// console.log(-d + (e << g) + f + g + e / f); // ≈ 170.67 → rounds to 171
// ```

// So, likely the intended (and elegant) solution is **171**, not 173.
