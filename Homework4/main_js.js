"use strict";

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let zoo = [
    {name: 'lion', quantity: 6},
    {name: 'zebra', quantity: 4},
    {name: 'tiger', quantity: 2},
    {name: 'elephant', quantity: 3},
    {name: 'giraffe', quantity: 2},
    {name: 'brown bear', quantity: 1},
    {name: 'big panda', quantity: 2},
    {name: 'deer', quantity: 5},
    {name: 'wolf', quantity: 6},
    {name: 'red panda', quantity: 8}
];
//
// for (let animal of zoo) {
//     document.write(`
// <div class="anim-box"><b>
// ${animal.name}
// ${animal.quantity}
// </b></div>
// `)
// }

let zoo = [
    {name: 'lion', quantity: 6},
    {name: 'zebra', quantity: 4},
    {name: 'tiger', quantity: 2},
    {name: 'elephant', quantity: 3},
    {name: 'giraffe', quantity: 2},
    {name: 'brown bear', quantity: 1},
    {name: 'big panda', quantity: 2},
    {name: 'deer', quantity: 5},
    {name: 'wolf', quantity: 6},
    {name: 'red panda', quantity: 8}
];
//
// for (let i=0; i < zoo.length; i++) {
//     let animal = zoo[i];
//     document.write(`
//     <div class ="anim-box"><b>
//      ${animal.name}
//      ${animal.quantity}
//      </b></div>`)
//     }
// }

let users = [
    {username: 'vasya423', status: true },
    {username: 'krista454', status: false },
    {username: 'nika111', status: true },
    {username: 'petrushka', status: true },
    {username: 'melissa123', status: false },
    {username: 'dimon678', status: true },
    {username: 'katiakat9', status: false },
    {username: 'sans0967867', status: false },
    {username: 'bulochkaZmakom', status: true },
    {username: 'nikon7564', status: false },
    {username: 'MagdaLina', status: false },
    {username: 'vovan567', status: false },
    {username: 'ivan222', status: true },
    {username: 'Dorilora', status: true },
    {username: 'EugenKoshak', status: false },
    {username: 'NinkaMandarinka', status: true },
    {username: 'kaleidoskop4', status: true },
    {username: 'Mishka', status: true },
    {username: 'Natalie506', status: false },
    {username: 'LudochkaLove', status: false },
];
// let i = 0;
// while (i < users.length) {
//     let user = users[i];
//     document.write(`
// <div class ="user-box"><b>
//   ${user.username}
//   (${user.status})
// </b></div>`);
//     i++;
//}



// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// for (let i=0; i < listOfItems.length; i++) {
//     let item = listOfItems[i];
//     document.write(`
//     <ul class = "item-box">
//       <li><b>${item}</b></li>
//     </ul>`)
//     }
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'images/milk.png'
    },
    {
        title: 'juice',
        price: 27,
        image: 'images/juice.png'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'images/tomato.png'
    },
    {
        title: 'tea',
        price: 15,
        image: 'images/tea.png'
    },
];
//
// //ШАБЛОН
// for (let product of products) {
// document.write(`
// <div class="product-card">
//     <h3 class="product-title"><b>${product.title} (price - ${product.price})</b></h3>
//     <img src="${product.image}" alt="image of product" class="product-image">
// </div>`)}

//Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту




//     є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
//
// - користувачів зі статусом true

// for (let user of users) {
//     if (user.status) {
//     document.write(`
// <div class="user-box"><b>
// ${user.name}
// ${user.age}
// ${user.status}
// </b></div>
//    `);
//   }
// }

// - користувачів зі статусом false

// for (let user of users) {
//     if (!user.status) {
//         document.write(`
// <div class="user-box"><b>
// ${user.name}
// ${user.age}
// ${user.status}
// </b></div>
//    `);
//     }
// }
// - користувачів які старші за 30 років

// for (let user of users) {
//     if (user.age > 30) {
//         document.write(`
// <div class="user-box"><b>
// ${user.name}
// ${user.age}
// ${user.status}
// </b></div>
//    `);
//     }
// }




