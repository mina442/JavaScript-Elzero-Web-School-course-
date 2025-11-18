// التكليف 01
// لديك متغير يحتوي على اليوم الخاص بالموعد وبواسطة ال Switch قم بإظهار رسالة للشخص على حسب اليوم المختار مع عمل الشروط التالية
// يجب التأكد أن إسم اليوم لا توجد قبله مسافات ولا بعده ويكون أول حرف Capital حتى لو تم كتابة الإسم بحروف صغيرة
// إذا كانت قيمة المتغير هي يوم الجمعة أو السبت أو الأحد تظهر له أنه لا توجد مواعيد متاحة في هذه الأيام
// إذا كانت قيمة المتغير هي يوم الإثنين أو الخميس يكون المواعيد المتاحة من الساعة العاشرة صباحا وحتى الخامسة مساء
// إذا كانت قيمة المتغير هي يوم الثلاثاء يكون المواعيد المتاحة من الساعة العاشرة صباحا وحتى السادسة مساء
// إذا كانت قيمة المتغير هي يوم الأربعاء يكون المواعيد المتاحة من الساعة العاشرة صباحا وحتى السابعة مساء
// إذا كانت قيمة المتغير هي يوم خاطيء تظهر له رسالة أن اليوم فيه خطأ
let day1 = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
switch (day1.trim().replace("f","F")) {
    case "Friday":
        console.log('Friday');
        break;
}
let day2 = "Friday";
let day3 = "Saturday";
let day4 = "Sunday";
// Output => "No Appointments Available"
switch (day2 || day3 ||day4) {
    case "Friday":
        console.log('No Appointments Available');
        break;
    case "Saturday":
        console.log('No Appointments Available');
        break;
    case "Sunday":
        console.log('No Appointments Available');
        break;
}

let day5 = "Monday";
let day6 = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"
switch (day5 || day6) {
    case "Monday":
        console.log('From 10:00 AM To 5:00 PM');
        break;
    case "Thursday":
        console.log('From 10:00 AM To 5:00 PM');
        break;
}
let day7 = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

let day8 = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

let day = "World";
// Output => "Its Not A Valid Day"
// // chat gpt
// // let day = "   friday  ";

// // 1) إزالة المسافات من البداية والنهاية
// day = day.trim();

// // 2) جعل أول حرف Capital والباقي small
// day = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();

// console.log(day); // Friday

// 3) استخدام الـ Switch لإظهار المواعيد
// switch (day) {
//   case "Friday":
//   case "Saturday":
//   case "Sunday":
//     console.log("No Appointments Available");
//     break;

//   case "Monday":
//   case "Thursday":
//     console.log("From 10:00 AM To 5:00 PM");
//     break;

//   case "Tuesday":
//     console.log("From 10:00 AM To 6:00 PM");
//     break;

//   case "Wednesday":
//     console.log("From 10:00 AM To 7:00 PM");
//     break;

//   default:
//     console.log("Its Not A Valid Day");
// }
// *
//   Switch Challenge
// */ 

let job = "Manager";
let salary = 0;
// switch (holidays) {
//     case 0:
//         money = 5000;
//         console.log(`My Money is ${money}`);
//         break;
// }

switch (job) {
    case "Manager":
        salary = 8000;
        console.log(`${salary}`);
        break;
    case "IT":
    case "Support":
        salary = 6000;
        console.log(`${salary}`);
        break;
    case "Developer":
    case "Designer":
        salary = 6000;
        console.log(`${salary}`);
        break;
    default:
        salary = 4000;
        console.log(`${salary}`);
        break;
}
// let job = "Manager";
// let salary = 0;

// switch (job) {
//   case "Manager":
//     salary = 8000;
//     break;

//   case "IT":
//   case "Support":
//     salary = 6000;
//     break;

//   case "Developer":
//   case "Designer":
//     salary = 7000;
//     break;

//   default:
//     salary = 4000;
// }

// console.log(`Salary Is ${salary}`);

/*
  If Challenge
*/

let holidays = 0;
let money = 0;
// if (job === "Manager") {
//   salary = 8000;
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// }
if (holidays === 0) {
//   case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
//   case 1:
//   case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
} else if (holidays === 3) {
    money = 2000;
    console.log(`My Money is ${money}`);
} else if (holidays === 4) {
//   case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    // break;
    } else if (holidays === 5) {
//   case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    // break;
    //   default:
    } else{
    money = 0;
    console.log(`My Money is ${money}`);
}
// let holidays = 0;
// let money = 0;

// if (holidays === 0) {
//   money = 5000;
// } else if (holidays === 1 || holidays === 2) {
//   money = 3000;
// } else if (holidays === 3) {
//   money = 2000;
// } else if (holidays === 4) {
//   money = 1000;
// } else if (holidays === 5) {
//   money = 0;
// } else {
//   money = 0;
// }

// console.log(`My Money is ${money}`);

/**
  Switch Challenge


let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}


  If Challenge


let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(My Money is ${money});
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(My Money is ${money});
    break;
  case 3:
    money = 2000;
    console.log(My Money is ${money});
    break;
  case 4:
    money = 1000;
    console.log(My Money is ${money});
    break;
  case 5:
    money = 0;
    console.log(My Money is ${money});
    break;
  default:
    money = 0;
    console.log(My Money is ${money});
}
 */
