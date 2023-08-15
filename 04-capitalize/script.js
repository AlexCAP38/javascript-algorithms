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

        //Разабьем строку на массив
        const upperSymbol = item.split('');
        
        //Ищем пустые элементы в массиве
        if (item === '') {
            delete allArray.splice[index];
            return
        }

        //Берем первый элемент в массиве и преобразовываем ее в верхний регистр
        const Symbol = upperSymbol.shift().toUpperCase();

        //Добавляем элемент в начало массива 
        upperSymbol.unshift(Symbol);

        //бреобразуем в строку возвращаем в массив
        return item = upperSymbol.join('')

    });

    return array.join(' ')

}

// Протестируйте решение, вызывая функцию с разными аргументами:

//console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
console.log(capitalize('нужно  правильно решить как минимум')); // "Молодость Всё Простит"