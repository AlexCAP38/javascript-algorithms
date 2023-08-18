/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {

    //разбиваем строку на массив c крупными словами
    let array = str.split(' ');

    array = array.map(function (item, index, allArray) {

        //Разабьем строку (слово) на массив (по буквам)
        const upperSymbol = item.split('');

        //Ищем пустые элементы в массиве
        if (item === '') {

            //return allArray.splice[index, 1];
            return false;
        }

        //Берем первый элемент(первую букву) в массиве и преобразовываем ее в верхний регистр
        const Symbol = upperSymbol.shift().toUpperCase();

        //Добавляем элемент в начало массива (возвращаем на место)
        upperSymbol.unshift(Symbol);

        //бреобразуем масси в строку и возвращаем колбэк
        return item = upperSymbol.join('')

    });

    return array.join(' ')

}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
console.log(capitalize('нужно  правильно решить как минимум')); // "Молодость Всё Простит"