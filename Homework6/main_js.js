"use strict";

// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'hello world';
// let tUC1 = str1.toUpperCase()
// console.log(str1.length, str1.toUpperCase(), tUC1.toLowerCase())
//
// let str2 = 'lorem ipsum';
// let tUC2 = str2.toUpperCase()
// console.log(str2.length, str2.toUpperCase(), tUC2.toLowerCase())
//
// let str3 = 'javascript is cool';
// let tUC3 = str3.toUpperCase()
// console.log(str3.length, str3.toUpperCase(), tUC3.toLowerCase())
//
// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let dirty_str = ' dirty string   ';
// let clean_str = dirty_str.trim()
// console.log(dirty_str)
// console.log(dirty_str.length)
// console.log(clean_str.length)

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// Варіант 1
// let my_str = 'Ревуть воли як ясла повні';
// let new_arr = my_str.split(' ')
// console.log(new_arr);

// Варіант 2
// let my_str = 'Ревуть воли як ясла повні';
// function stringToArray (){
//     let new_arr = my_str.split(' ')
//     return new_arr;
// }
//
// console.log(stringToArray(my_str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let my_arr = [10,8,-7,55,987,-1011,0,1050,0];
// let new_str = my_arr.map(value => value.toString());
// console.log(new_str);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// console.log(sortNums(nums, 'ascending'));
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// function sortNums (arr_of_nums, direction) {
//     if (direction === 'ascending') {
//         arr_of_nums.sort((a,b) => a - b);
//     } else if (direction === 'descending') {
//         arr_of_nums.sort((a,b) => b - a);
//     }
//     return arr_of_nums;
// }
// console.log(sortNums(nums, 'ascending'));

//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let sort_for_descend = coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration );
// console.log(sort_for_descend);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filtered = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filtered);

// описати колоду карт

const card_suits = [
    {suit: 'heart', colour: 'red'},
    {suit: 'diamond', colour: 'red'},
    {suit: 'clubs', colour: 'black'},
    {suit: 'spade', colour: 'black'},
]
const card_names = [6,7,8,9,10,'jack','queen','king','ace'];
const deck = [];

for (const card_suit of card_suits) {
    for (const card_name of card_names) {
        const card = {suit:card_suit.suit,
                      name:card_name,
                      colour:card_suit.colour
        }
        deck.push(card)
    }
}
deck.push({suit:'joker', name:'none', colour:'red'});
deck.push({suit:'joker', name:'none', colour:'black'});
console.log(deck);

// - знайти піковий туз
let filter_spade_ace = deck.filter(value => value.suit === 'spade' && value.name === 'ace');
console.log(filter_spade_ace);

// - всі шістки
let filter_six = deck.filter(value => value.name === 6);
console.log(filter_six);

// - всі червоні карти
let filter_red = deck.filter(value => value.colour === 'red');
console.log(filter_red);

// - всі буби
let filter_diamond = deck.filter(value => value.suit === 'diamond');
console.log(filter_diamond);

// - всі трефи від 9 та більше
let filter_clubs_nine_plus = deck.filter(value => value.suit === 'clubs' && value.name >= 9 ||
    value.suit === 'clubs' && typeof value.name === "string");
console.log(filter_clubs_nine_plus);
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }