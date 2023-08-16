/*
 * Задача 6: «Уникальные числа»
 *
 * Напишите функцию uniq(arr), принимающую на вход массив целых чисел.
 * Функция должна возвращать массив уникальных чисел, которые содержатся
 * в переданном массиве. То есть, дубликаты должны быть удалены.
 *
*/

function uniq(arr) {

  //создаем новый массив, функция мар будет возвращать элементы
  const array = arr.map(function (elem, indexElem, arrayElem) {


    let i = 0;
      let a = 1;
    //функция для поиска дублей
    arr.forEach((elemFind, indexFind, arrayFind) => {

      // наичнаем сравнение с соседнего элемента. этот элемент есть в массиве ???
      if (arrayElem[indexElem] === arrayFind[indexFind + 1]) {
        i++;
      } else {
        a++
        //return delete arrayElem[indexFind]
      }
    });

    return elem
  });





  //вернем изменный массив
  return array
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(uniq([1, 2, 5, 4, 2])); // [1, 2, 5, 4]
//console.log(uniq([3, 3, 3, 5])); // [3, 5]
//console.log(uniq([1, 4, 2, 2, 3, 4, 8])); // [1, 4, 2, 3, 8]