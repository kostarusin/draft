// # Модуль 2. Заняття 3. Масиви

// ## Example 1 - Базові операції з масивом

// 1. Створіть масив `genres` з елементами «Jazz» та «Blues».
// 2. Додайте «Рок-н-рол» до кінця.
// 3. Виведіть у консоль перший елемент масиву.
// 4. Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву
//    довільної довжини.
// 5. Видаліть перший елемент та виведіть його в консоль.
// 6. Вставте «Country» та «Reggae» на початок масиву.

// ```js
// const genres = ['Jazz', 'Blues'];

// genres.push('Рок-н-рол');

// console.log('genres', genres);
// console.log('first genre is', genres[0]);
// console.log('last genre is', genres[genres.length-1]);

// let removedItem = genres.shift();

// console.log('removing', removedItem);
// console.log('genres after removing', genres);

// genres.unshift('Country', 'Reggae');

// console.log('genres after adding two new', genres);
// ```

// ## Example 2 - Масиви та рядки

// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення
// яких зберігаються у змінній `values` у вигляді рядка. Значення гарантовано
// розділені пробілом.

// ```js
// const values = '8 11';

// let valuesParts = values.split(' ');
// let width = Number(valuesParts[0]);
// let height = Number(valuesParts[1]);
// let square = width * height;

// console.log('square', square);
// ```

// ## Example 3 - Перебір масиву

// Напиши скрипт для перебору масиву `fruits` циклом `for`. Для кожного елемента
// масиву виведи в консоль рядок у форматі `номер_елемента: значення_елемента`.
// Нумерація елементів повинна починатися з `1`.

// ```js
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(`${i + 1} : ${fruits[i]}`);
// }
// ```

// ## Example 4 - Масиви та цикли

// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У
// змінних `names` та `phones` зберігаються рядки імен та телефонних номерів,
// розділені комами. Порядковий номер імен та телефонів у рядках вказують на
// відповідність. Кількість імен та телефонів гарантовано однакова.

// ```js
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesParts = names.split(',');
// const phonesParts = phones.split(',');

// for (let i = 0; i < namesParts.length; i++) {
//     console.group('User', namesParts[i]);
//     console.log('number', i + 1);
//     console.log('phone', phonesParts[i]);
//     console.groupEnd();
// }
// ```

// ## Example 5 - Масиви та рядки

// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і
// останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// ```js
// const string = 'Welcome to the best future ever';
// let stringParts = string.split(' ');

// 1
// console.log('initial', stringParts);
// stringParts.shift();
// console.log('after shift', stringParts);
// stringParts.pop();
// console.log('after pop', stringParts);
// for (let i = 0; i < stringParts.length; i++) {
//     console.log(stringParts[i]);
// }
// 1

// 2
// for (let i = 1; i < stringParts.length - 1; i++) {
//     console.log(stringParts[i]);
// }
// ```

// ## Example 6 - Масиви та рядки

// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить
// його в консоль.

// ```js
// const string = 'Welcome to the future';

// 1
// let result = '';
// for (let i = string.length - 1; i >= 0; i--) {
//     result += string[i];
// }
// console.log(result);

// 2
// let result = string.split('').reverse().join('');
// ```

// ## Example 7 - Сортування масиву із циклом

// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою
// елемента.

// ```js
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// console.log('original', langs);
// langs.sort();
// console.log('sorted', langs);
// ```

// ## Example 8 - Пошук елемента

// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для
// будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// ```js
// const numbers = [5, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//         min = numbers[i];
//     }
// }

// console.log('min', min); // 1
// ```
