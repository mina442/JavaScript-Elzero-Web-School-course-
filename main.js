// ===========================================
// == Variables And Concatenation Challenge ==
// ===========================================

// [1] Create 3 Variables [Title, Desctiption, Date]
// -- All In One Statement
// -- Variable Name Must Be Two Words
// -- Title Content Is "Elzero"
// -- Description Content Is "Elzero Web School"
// -- Date Content Is "25/10"
let Title_Content = "Elzero",
Desctiption_Content = "Elzero Web School", 
    Date_Content = "25/10";
// [2] Create Variable Contains Div And This Div Contains
//تجربه رقم ٢
// let card = document.createElement("div");
// card.classList.add("card");

// card.innerHTML = `
//   <h3>${Title_Content}</h3>
//         <p>${Desctiption_Content}</p>
//         <span>${Date_Content}</span>
// `;
// document.body.appendChild(card);
// [1] إنشاء 3 متغيرات في سطر واحد
let titleName = "Elzero",
descContent = "Elzero Web School",
dateValue = "25/10";

// [2] إنشاء كود الكارت باستخدام Template Literals
let card = `
<div class="card">
<h3>${titleName}</h3>
<p>${descContent}</p>
<span>${dateValue}</span>
</div>
`;

// [3] إضافة الكارت للصفحة 4 مرات باستخدام repeat()
document.write(card.repeat(4));

// تجربه رقم واحد
// let ca1 =
//     <div class="Card">
//         <h3>`${Title_Content}</h3>
//         <p>`${Desctiption_Content}</p>
//         <span>`${Date_Content}</span>
//     </div>;
// document.write(
//     `${ca1}`
// );
//التجربه الاوله ناجحه ولكن كان ينقصها بعض التفاصيل 
// -- H3 For Title
// -- P For Paragraph
// -- Span For Time
// [3] Add This Card To Page 4 Times
// [4] Use Template Literals For Concatenate

// Extra
// - Use ES6 Repeat