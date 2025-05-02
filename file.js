// test ();
// privet2 ();
// test ();
// test ();
// function privet2 (){
//     console.log("hello-1")
// }
// function test (){
//     console.log("Hello")
// }

////////////////--------////////////////


// var ext = "Зовнішня змінна11";
// //var inner = "Test";
// function test() {
//     var inner = "Тільки для внутрішнього користування"; // але краще писати let 
//     console.log('Бачу: ext=' + ext);
//     console.log('Бачу: inner=' + inner);
// }
// test();
// console.log('Бачу: ext=' + ext);
// console.log('Бачу: inner=' + inner);


////////////////--------////////////////
//Своя сорочка ближче до тіла (народна мудрість)
// var ext = "Зовнішня змінна";

// function test() {
//     var ext = "Внутрішня змінна";
//     console.log('Змінна ext=' + ext);
// }

// test();
// console.log('Змінна ext=' + ext);


////////////////спроба змінити зміну в середині функкції///////////////

"use strict";
function tets2(){
    myVar="Нажаль це буде не число,але я його покажу"
    console.log("А тепер покажи мені це число "+ myVar)
    console.log("Спробуй показати мені це ще раз "+ myVar)
    let myVar=" А тепер я зовсім іннший"
}

tets2();

