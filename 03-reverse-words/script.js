/*
 * Задача 3: «Развернуть слова в предложении»
 *
 * Напишите функцию reverseWords(str), принимающую на вход строку.
 * Функция должна вернуть новую строку, расставив слова в обратном
 * порядке.Если в строке есть знаки препинания, их можно удалить
 * или оставить — на ваше усмотрение.
 *
*/

function reverseWords(str) {
    const array = str.split(' '); //разбиаем строку на массив
    const result = [];
for (i = 0; i < array.length; i++){
let c =array.length;
  result[i] = array[c = c - 1 ];
  console.log(result);
debugger

}
// array.map(function (item) {
// const result = result + item;
// console.log(result);
// debugger;



//     array.forEach(function (element) {
// Array = [];
//         array.push(element);
//         console.log(array);
//         return array
//     });




}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(reverseWords('всегда много путей достичь цель есть')); // "есть цель достичь путей много всегда"
console.log(reverseWords('испробовать их все должны вы')); // "вы должны все их испробовать"