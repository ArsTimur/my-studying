'use strict';
// const clearStr = document.querySelector('#clearStore');
// const submitBtn = document.querySelector('#form__submit');
// let checkBox = document.querySelector('#rememberMe');
// const form = document.querySelector('form');
// const change = document.querySelector('.color-block');

// // =================================================================
// Из урока по localStorage
// if (localStorage.getItem('isChecked')) {
//     checkBox.checked = true;
// }
// checkBox.addEventListener('change', () => {
//     localStorage.setItem('isChecked', true);
// })

// if (localStorage.getItem('bg') === 'changed') {
//     form.style.backgroundColor = 'gray';

// }


// change.addEventListener('click', () => {
//     if (localStorage.getItem('bg') === 'changed') {
//         localStorage.removeItem('bg');
//         form.style.backgroundColor = '#fff';

//     } else {
//         localStorage.setItem('bg', 'changed');
//         form.style.backgroundColor = 'gray';
//     }
// })

// const persone = {
//     name: 'Alex',
//     age: 25
// };

// const serzdPersone = JSON.stringify(persone);
// localStorage.setItem('alex', serzdPersone)

// console.log(JSON.parse(localStorage.getItem('alex')))


// // =================================================================

// submitBtn.addEventListener('click', (e) => {
//     e.preventDefault();

//     const username = document.querySelector('#username').value;
//     const email = document.querySelector('#email').value;
//     const message = document.querySelector('#message').value;

//     if (checkBox.checked) {
//         localStorage.setItem('username', `${username}`);
//         localStorage.setItem('email', `${email}`);
//         localStorage.setItem('message', `${message}`);
//         localStorage.setItem('id', 1);

//         console.log(localStorage.getItem('username'))
//         console.log(localStorage.getItem('email'))
//         console.log(localStorage.getItem('message'))
//         console.log(localStorage.getItem('id'))
//     } else {
//         console.log('Отправленно')
//     }
//     form.reset();
// });
// clearStr.addEventListener('click', (e) => {
//     e.preventDefault();
//     localStorage.clear();
//     console.clear();

//     form.reset();
// });


//// =================================================================
//Паттерны и флаги

// new RegExp('pattern', 'flags');

// /pattern/flags


// const ans = prompt('Введите ваше число');

// const reg = /\d/g;
// console.log(ans.match(reg));

// const str = 'My name is R2D2';

// console.log(str.match(/\D/ig));

// Обратные классы
// \D -> Не числа
// \W -> Не буквы

// \d -> называется digets -> ищет цифры
// \w -> ищет все буквы слова
// \s -> называется spaces -> ищет пробелы



//const reg = / /ig; // можно также const reg = /n/gim или igm или mig;
//console.log(ans.replace(reg, '')); //все слова которые через пробелы соединяет

// i -> ищет вне зависимости от регистра(Большие или маленькие)
// g -> Когда мы хотим найти сразу несколько
// m -> Многострочный режим
// Также можно использовать все вместе

// console.log(ans.search(reg));
//search 
//match -> Более мощнее выводит подробности 

// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/\./g, "*"))

// console.log('12-34-56'.replace(/-/g, ':'))

//Геттеры и сеттеры

// const persone = {
//     name: "Alex",
//     age: 25,

//     get userInfo(){
//         return this.name + ' ' + this.age;
//     },
//     set userInfo(num) {
//         this.age = num;
//     }
// }

// console.log(persone.userAge = 30)
// console.log(persone.userInfo);