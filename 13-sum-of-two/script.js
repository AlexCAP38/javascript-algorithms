/*
 * Задача 13: «Сумма двух»
 *
 * Напишите функцию sumOfTwo(arr, num). Её аргументы: массив целых чисел arr
 * и целое число num. Функция должна вернуть true, если в переданном массиве
 * есть какие-то два числа, чья сумма равна num. Если же такой пары чисел нет,
 * функция должна вернуть false.
 * 
*/

function sumOfTwo(arr, sum) {


    arr.forEach((item, index, array) => {

        for (i = 0; i < array.length; i++) {
            
            console.log(item + '  ' + array[index + i]);
            console.log(item + array[index + i]);

        }
        
    }, 0);


    // for (let c = 0; c < arr.length; c++) {

    //     for (let i = 0; i < arr.length - 1; i++) {

    //         console.log(arr[c] + '   ' + arr[i + 1]);
    //         console.log(arr[c] + arr[i + 1]);




    //         if (arr[c] + arr[i + 1] === sum) { return true }

    //     }

    //     if (c === arr.length) return false

    // }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

//console.log(sumOfTwo([1, 2, 3, 4, 5], 4)); // true (так как 1 + 3 === 4)
console.log(sumOfTwo([1, 2, 3, 4, 5], 100)); // false