"use strict";

//- Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// - Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.
//
//  - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//   за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let x = -3;
console.log(x);
if (x !== 0) {
     document.write('<h2>RIGHT</h2>');
} else {
     document.write('<h2>WRONG</h2>');
}
//
// let time = '20';
// console.log(time);
// if ( 0 > time || time > 59) {
//     console.log('WRONG NUMBER');
// } else if ( time >= 0 && time < 15 ) {
//     console.log('This time belongs to the first quarter of an hour');
// } else if ( time >= 15 && time < 30 ) {
//     console.log('This time belongs to the second quarter of an hour');
// } else if ( time >= 30 && time < 45 ) {
//     console.log('This time belongs to the third quarter of an hour');
// } else if ( time >= 45 && time <= 59 ) {
//     console.log('This time belongs to the fourth quarter of an hour');
// } else {
//     console.log('ERROR');
// }
//
//
// let day = 5;
// console.log(day);
// if ( 1 > day || day > 31) {
//     console.log('WRONG NUMBER');
// } else if ( day >= 1 && day <= 10 ) {
//     console.log('This day belongs to the first decade of a month');
// } else if ( day > 10 && day <= 20 ) {
//     console.log('This day belongs to the second decade of a month');
// } else if ( day > 20 && day <= 31 ) {
//     console.log('This day belongs to the third decade of a month');
// } else {
//     console.log('ERROR');
// }
//
//
// let day_of_a_week =  +prompt('Enter number of a day');
// switch ( day_of_a_week ) {
//     case '1':
//         document.write('<h2>Sunday</h2>');
//         break;
//     case '2':
//         document.write('<h2>Monday</h2>');
//         break;
//     case '3':
//         document.write('<h2>Tuesday</h2>');
//         break;
//     case '4':
//         document.write('<h2>Wednesday</h2>');
//         break;
//     case '5':
//         document.write('<h2>Thursday</h2>');
//         break;
//     case '6':
//         document.write('<h2>Friday</h2>');
//         break;
//     case '7':
//         document.write('<h2>Saturday</h2>');
//         break;
//     default:
//         document.write('<h2>????</h2>');
// }


// let num1 = +prompt('Enter the first number')|| NaN ;
// console.log(num1);
// let num2 = +prompt('Enter the second number')|| NaN ;
// console.log(num2);
// if ( num1 > num2) {
//     document.write(num1);
// } else if ( num1 < num2) {
//     document.write(num2);
// } else if ( num1 === num2 ) {
//     document.write('<h2>numbers are equal</h2>');
// } else  {
//     document.write('<h2>ERROR</h2>');
// }

// let x = prompt() || 1;
// console.log(x);