/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 *
*/

function fizzBuzz(num) {

//это мой вариант но оно не проходит тесты, я конечно могу закопипастить решение но оно для моего понимаение сложное

  if (num % 3 === 0 && num % 5 === 0) {

    console.log('fizzbuzz');

  };

  if (num % 5 === 0) {

    console.log('buzz');

  };

  if (num % 3 === 0) {

    console.log('fizz');

  };

  return num

}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(1));
console.log(fizzBuzz(2));
console.log(fizzBuzz(3));
console.log(fizzBuzz(4));
console.log(fizzBuzz(5));
console.log(fizzBuzz(6));
console.log(fizzBuzz(7));
console.log(fizzBuzz(8));
console.log(fizzBuzz(9));
console.log(fizzBuzz(10));
console.log(fizzBuzz(15));
