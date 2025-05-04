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

// "use strict";
// function tets2(){
//     myVar="Нажаль це буде не число,але я його покажу"
//     console.log("А тепер покажи мені це число "+ myVar)
//     console.log("Спробуй показати мені це ще раз "+ myVar)
//     let myVar=" А тепер я зовсім іннший"
// }

// tets2();


////////////////squareArea-prompt///////////////

// Function Expression

// var prompt = require('prompt');                                   //стороння бібліотека prompt

// let squareArea = function () {
//     prompt.start();                                                //стартує біліотека звідси
//     let side = prompt.get(["side"], function (err, result) {
//            console.log("side:", result.side);
//            console.log("side: " + result.side);
//            let side =  result.side;
//            console.log(side * side); 
//     });
// }
// squareArea();


////////////////corectFunctiont///////////////


// printGreeting(); // І в нас ніяких проблем;
// function printGreeting() {
//     console.log("Hello world")
// }
////////////////var vs  let in the function ///////////////

// printGreeting()
// var printGreeting = function () {
//     console.log("Hello world")
// }

// // Function Expression корисно використовувати коли ми хочемо в змінній зберігати різні функції
// let autoBrand = "ТАВРІЯ";
// let accelerateСar;
// switch (autoBrand) {
//     case "Audi":
//         accelerateСar = function () {
//             let audiSpeedIndex = 100;
//             console.log("Розганяємо авто до 150км: " + audiSpeedIndex * 1.5);
//         }
//         break;
//     case "ТАВРІЯ":
//         accelerateСar = function () {
//             let audiSpeedIndex = 0;
//             console.log("Розганяємо авто до 150км")
//             for (let i = 0; i < 60; i += 10) {
//                 audiSpeedIndex += i;
//                 console.log(audiSpeedIndex);
//             }
//         }
//         break;
// }

// accelerateСar();

/////////////////////////////Обовґязкове використання РЕТУРН у функціях для повернення значення. ДЛя допалтших операцій з ними /////////////////////////////

// Поняття return
// Розглянемо що повертає функція за замовчуванням
// let a = 5;

function squareAreaCalculation() {
    let result = a * a; // Але все одно погано що ми маємо залежність через використання зовнішньої змінної:
    return result;
}
 var result = squareAreaCalculation();
 var result2=result+'Hello';
let result3=result+result2;

 
 console.log('Перший результат буде число:'+ result);
 console.log('Другий результат буде рядок:'+ result2);
 console.log("Якщо ж визначити, який тип вони мають тоді")
 console.log('Перше значення буде мати тип значення :'+ typeof(result));
 console.log('Друге значення буде мати тип значення :'+ typeof(result2));
 console.log('Спробуємо додати два значення :'+ result3);



Спробуємо додати два значення 