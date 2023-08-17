/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 *
*/

function anagram(str1, str2) {

  //преобразовали в нижний регистр и разбиваем на массив
  str1 = str1.toLowerCase().split('');

  //преобразовали в нижний регистр
  str2 = str2.toLowerCase();

  //переменная для подсчета проходов поиска
  let sum = 0;

  for (let i = 0; i < str1.length; i++) {

    //если в str2 найдем str1 вернем true
    if (str2.includes(str1[i])) {

      // + 1 к контрольной переменной
      sum++;

      //иначе буквы нет тогда это не анаграмма вернуть функцие false
    } else return false

    //выход из цикла по длинне str1
    if (sum == str1.length) return true

  };

}

// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(anagram('aba', 'ba')); // true    я не понимаю почему тут должно вернуться false
console.log(anagram('up', 'UP')); //true      я не понимаю почему тут должно вернуться false

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false