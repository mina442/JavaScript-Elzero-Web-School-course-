// console.log(elzero.innerHTML); // object
//  console.log(typeof elzero); // object
// Add Variables Here
let NumberOne = 10;
let NumberTwo = 20;
let h = NumberOne + "" + NumberTwo;

// Ouput
console.log(NumberOne+""+NumberTwo); // Normal Concatenate => 1020
console.log(typeof (NumberOne+''+NumberTwo) ); // Normal Concatenate => String
console.log(`${NumberOne}${NumberTwo}`); // Template Literals Way => 1020
console.log(typeof`${NumberOne}${NumberTwo}`);  // Template Literals Way => String

console.log(NumberTwo+"\n"+NumberOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${NumberOne}
${NumberTwo}`);
/*
  Template Literals Way
  20
  10
*/
let a = 21;
let b = 20;
let pair = `${b}${a}_`;
let result = pair.repeat(3) ;
console.log(`_${a}_${result}_${b}_`); // _21_2021_2021_2021_20_
console.log(
`I'm In \\\\ Love \\ """ '''\ ++ With ++\
\"""\"""\ \"\"JavaScript\"\"\``);
console.log(
  'I\'m In\n' +
  '\\\\\n' +
  'Love \\\\ """ \'\'\'\n' +
  '++ With ++\n' +
  '\\"""\\""\"\n' +
  '""JavaScript""``'
);
console.log('`I\'m In \n \\\\ \n Love \\\\ \"\"\" \'\'\' \n ++ with ++ \\ \"\"\" \\ \"\"\" \n""javascript"" \``');

