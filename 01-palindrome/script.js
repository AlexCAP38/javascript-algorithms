/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 *
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 *
*/

function palindrome(str) {

  let newElm = str.toLowerCase().split('');

for (let i = 0; i < newElm.length; i++) {

let startArray = 0;
let endArray = newElm.length;


  if (newElm[i].includes(newElm[newElm.length])) {


    console.log('1');
    // console.log(newElm[startArray]);
    // console.log(startArray);
    // console.log(newElm[endArray]);
    // console.log(endArray);
  } else {
    console.log('2');

  }

}

}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(palindrome('топот')); // должно быть true
//console.log(palindrome('Saippuakivikauppias')); // true
//console.log(palindrome('привет')); // false

/*
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 *
 * palindrome('О, лета тело!'); // true
 *
*/