/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 *
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/
const symbol = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];

function findVowels(str) {

  //разбиваем строку на массив
  const findSymbol = str.toLowerCase().split('');

  //переменная возвращающая общее количество гласных букв
  let totalFindSymbol = 0;

  //используем метод редус с возвратом значения
  findSymbol.reduce(function (result, item) {

    //перем елемент из массива гласных букв и сравниваем его входящей строкой
    symbol.forEach(function (symbolElm) {

      //если элементы совпадают + 1
      if (symbolElm === item) {
        result++;
      }

    });

    return totalFindSymbol = result
  }, 0);

  return totalFindSymbol
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3