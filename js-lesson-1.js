// # Модуль 1. Заняття 1. Змінні, типи та оператори

// коротко про git
// DevTools браузера
// Як браузер виконує js?
// Де я пишу код, що я використовую
// - mdn
// - learn js
// - chatGPT

// що таке змінні ?
// let / const / var?

// ## Example 1 - Математичні оператори

// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// ```js
// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log('total', total);
// const diff = apples - grapes;
// console.log('diff', diff);
// ```

// ## Example 2 - Комбіновані оператори

// Заміни вираз перевизначення комбінованим оператором `+=`.

// ```js
// let students = 100;
// students += 50;
// console.log('students', students);
// ```

// ## Example 3 - Пріоритет операторів

// Розбери пріоритет операторів в інструкції привласнення значення змінної
// `result`.

// ```js
// const result = 108 + 223 - (2 * 5);
// console.log('result', result);
// ```

// ## Example 4 - Клас Math

// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення
// змінної `value`. Використовуй методи `Math.floor()`, `Math.ceil()` та
// `Math.round()`. Перевір що буде в консолі при значеннях `27.3` та `27.9`.

// ```js
// const value = 27;

// console.log('original', value);
// console.log('floor', Math.floor(value));
// console.log('ceil', Math.ceil(value));
// console.log('round', Math.round(value));
// ```

// ## Example 5 - Шаблонні рядки

// Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
// змінні вставлені в рядок.

// ```js
// const companyName = 'Cyberdyne Systems';
// const repairBots = 160;
// const defenceBots = 0;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"
// ```

// ## Example 6 - Методи рядків та чейнінг

// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього
// необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних `weight` та `height`, але не як числа,
// а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути
//задані у вигляді `24.7` або `24,7`, тобто як роздільник дробової
// частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// ```js
// let weight = '88,3';
// const height = Number('1.75');

// weight = weight.replace(',', '.');

// const bmi = weight / (Math.pow(height, 2));
// console.log(bmi.toFixed(1)); // 28.8
// ```

// ## Example 7 - Оператори порівняння та приведення типів

// Яким буде результат виразів?

// ```js
// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);
// ```

// ## Example 8 - Логічні оператори

// Яким буде результат виразів?

// ```js
// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);
// ```

// Поясніть як працює оператор '!'

// ## Example 9 - Значення за замовчуванням та оператор нульового злиття

// Отрефактори код так, щоб у змінну `value` присвоювалося значення
// змінної `incomingValue`, якщо воно не рівне `undefined` або `null`. В
// іншому випадку має присвоюватися значення `defaultValue`. Перевір роботу
// скрипта для наступних значень змінної `incomingValue`: null, undefined, 0,
// false. Використовуй оператор `??` (nullish coalescing operator).

// ```js
// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);
// ```

// ## Example 10 - Оператор % та методи рядків

// Напиши скрипт, який переведе значення `totalMinutes` (кількість хвилин) в
// рядок у форматі годин та хвилин `HH:MM`.

// - 70 покаже 01:10
// - 450 покаже 07:30
// - 1441 покаже 24:01

// ```js
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// NEED TO UNDERSTAND task 21_2

// function findLongestWord(string) {
//   let array = string.split(" ");
//   let maxLength = array[0];
//   for (const element of array) {
//     if (element.length > maxLength.length) {
//       maxLength = element;
//     }
//   }
//   console.log(maxLength);
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");

// task 22_2
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   console.log(numbers);
// }
// createArrayOfNumbers(29, 34);

// task 23_2
// function filterArray(numbers, value) {
//   const array = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       array.push(numbers[i]);
//     }
//   }
//   console.log(array);
// }
// filterArray([1, 2, 3, 4, 5], 3);

// task 24_2
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   console.log(fruits.includes(fruit)); // Change this line
// }

// checkFruit("plum");

// task 25_2
// function getCommonElements(array1, array2) {
//   let array3 = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       array3.push(array1[i]);
//     }
//   }
//   console.log(array3);
// }
// getCommonElements([1, 2, 3], [10, 20, 30]);

// task 26_2
// function calculateTotalPrice(order) {
//   let total = 0;
//    for (const element of order) {
//     total += element;
//   }
//   console.log(total);
// }
// calculateTotalPrice([12, 85, 37, 4]);

// task 27_2
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const element of numbers) {
//     const number = element;

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   console.log(filteredNumbers);
// }
// filterArray([12, 24, 8, 41, 76], 20);

// task 28_2
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// task 29_2
// function getEvenNumbers(start, end) {
//   const pairNumbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       pairNumbers.push(i);
//     }
//   }
//   console.log(pairNumbers);
// }
// getEvenNumbers(6, 12);

// task 30_2
// const start = 6;
// const end = 27;
// let number;
// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);
