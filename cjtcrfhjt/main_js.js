"use strict";

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function square(a, b) {
//      let result = a * b;
//      return result;
//
// }
//
// let sq1 = square(10, 15);
// let sq2 = square(12, 8);
// console.log(sq1, sq2);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function radius(r) {
//
//      let pi = 3.14;
//      let rsq = r * r ;
//      let result = pi * rsq;
//      return result;
//
// }
//
// let r1 = radius(10);
// let r2 = radius(5);
// console.log(r1, r2);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуcом r

// function sq_cyl(h, r) {
//      let pi = 3.14;
//      let rsq = r * r ;
//      let sq_base = 2 * pi * rsq ;
//      let sq_side = 2 * pi * r * h ;
//
//      let result = sq_base + sq_side;
//      return result;
//
// }
//
// let sqc1 = sq_cyl(15, 5);
// let sqc2 = sq_cyl(10, 6);
// console.log(sqc1, sqc2);

// - створити функцію яка приймає масив та виводить кожен його елемент

// function arr_printer(arr) {
//     for (const item of arr) {
//         console.log(item);
//
//     }
//
// }
// arr_printer([1,2,3,4,5]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function par_printer(tag) {
//     document.write( `<${tag}>${arguments[1]}</${tag}>`)
//
// }
// par_printer ('p','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, explicabo incidunt libero magni reprehenderit suscipit.');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list1_printer() {
//     document.write( `<ul>`)
//     {
//         document.write(`<li>${arguments[0]}</li>`)
//         document.write(`<li>${arguments[0]}</li>`)
//         document.write(`<li>${arguments[0]}</li>`)
//     }
//     document.write(`</ul>`)
//
// }
// list1_printer ('Lorem ipsum dolor.');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list2_printer (...item_list) {
//     document.write(`<ul>`)
//     {
//         for (let i = 0; i < 3; i++) {
//             let argument = item_list[0];
//             document.write(`<li>${argument}</li>`)
//         }
//         document.write(`</ul>`);
//     }
// }
// list2_printer ('Lorem ipsum dolor.');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function list_maker(arr) {
//     document.write( `<ul>`)
// {
//     for (const item of arr) {
//         document.write (`<li>${item}</li>`);
// document.write(`</ul>`);
//    }
// }
// }
// list_maker([1,'dog',false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.




// - створити функцію яка повертає найменьше число з масиву

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

