// "use strict";
// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then(users => {
//         let div = document.createElement('div');
//         let ul = document.createElement('ul');
//         for (const user of users) {
//                 let item = document.createElement('li');
//                 item.innerText = `${user.id} ${user.name}`;
//
//                 let link = document.createElement('a');
//                 link.href = `info_of_users.html?id=${user.id}`;
//                 link.innerText = 'info of user';
//                 ul.append(item,link);
//
//         }
//         div.appendChild(ul);
//         document.body.appendChild(div);
//     });







