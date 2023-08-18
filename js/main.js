// Функция создания последовательности Фибоначчи с заданным числом членов массива count
function fibonachi(count){
    let fib = []; // инициализация пустого массива
    for(let i = 0; i < count; i++){
        if(i == 0){
            fib[i] = 0;  // задание значения 0-го элемента массива
        }
        else if(i==1){
            fib[i] = 1; // задание значения 1-го элемента массива
        }  
        else if(i==2){
            fib[i] = 1; // задание значения 2-го элемента массива
        }          
        else {fib[i] = fib[i-2] + fib[i-1]} // рассчет зависимости для последующих элементов массива
    }
    return fib;
}
let fibonachiArray = fibonachi(15);
console.log("Последовательность Фибоначчи: " + fibonachiArray);


// ----------------------------------------------------------------------------------------------
// Функция вычисления факториала заданного числа n 
function factorial(n){
    let fact = 1;
    if(n == 0){   // если заданное число n=0, то факториал равен 1, что уже было инициализировано ранее
        return fact;
    }
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

let factorialOfNumber = factorial(4);
console.log("Значение факториала для введенного числа равно: " +  factorialOfNumber);

// ----------------------------------------------------------------------------------------------
// Функция вычисления суммы и произведения цифр числа
// Примечание: используется еще одна форма записи функций
let addAndMultiplicate = function(num){     // параметром функции может быть как число (12345), так и строка с числом ("12345")
    num += "";     // переводит введенное число в строковой формат, т.е. 1234 станет "1234", далее с ним можно работать как с массивом (строкой)
    let add = 0,   // инициализация начального значения суммы
        mul = 1;   // инициализация начального значения произведения
    for(let i = 0; i <num.length; i++){
        add += +num[i];  // переводим полученное значение из строки в число с помощью +, а также накапливаем значение суммы с помощью +=
        mul *= num[i];   // накапливаем значение произведения с помощью *=, перевод полученного значения из строки в число происходит автоматически, т.е. + можно не ставить
    }
    return{              //возвращаем как объект с полями "сумма" и "произведение"
        "Сумма": add,
        "Произведение": mul
    }
}
console.log(addAndMultiplicate(795));    // проверка, если введено число
console.log(addAndMultiplicate("795"));  // проверка, если введена строка с числом

// ----------------------------------------------------------------------------------------------
// Функция инвертирования порядка следования цифр числа
function reverse(number){
    number += "";                // переводит введенное число в строковой формат
    let reverseNumber = "";      // инициализация пустого массива для последующей записи инвертированного числа
    for (let i = number.length - 1; i >= 0; i--) {  // цикл с конца массива в начало
        reverseNumber += number[i];                 // заполнение массива цифрами
    }
    return +reverseNumber      // возвращение в числовом формате за счет +
}
console.log("Инвертированное число: " + reverse(795));     // проверка, если введено число
console.log("Инвертированное число: " + reverse("795"));   // проверка, если введена строка с числом

// ----------------------------------------------------------------------------------------------
// Функция подсчета количества четных и нечетных цифр в числе
function evenAndOdd(number){
    number +="";
    let evenCount = 0,
        oddCount = 0;
    for (let i = 0; i < number.length; i++) {
        if(number[i] % 2 == 0){
            evenCount++;
        } else {
            oddCount++;
        }
    }
    return {                //возвращаем как объект с полями
        "Количество четных цифр в числе": evenCount,
        "Количество нечетных цифр в числе": oddCount
    }
} 
console.log(evenAndOdd(79545254));     // проверка, если введено число
console.log(evenAndOdd("79545254"));   // проверка, если введена строка с числом

// ----------------------------------------------------------------------------------------------
// Функция угадывания рандомного числа за 10 попыток
function randomNumber(){
// генерируем рандомное число в диапазоне [0, 1), 
// умножаем на 100 для перехода в диапазон [0, 100), округляем число в меньшую сторону
    let number = Math.floor(Math.random() * 100);  
    for (let count = 1; count <= 10; count++) {   // цикл угадывания сгенерированного числа, count - счетчик попыток
        let result = +prompt(`Количество оставшихся попыток: ${11-count}. \nПопытка №${count}, введите число`)
        if(result == number){
            return alert(`Вы угадали число! Сделано попыток: ${count}, число: ${number}`)
        } else if(result < number){
            alert(`Ваше число ${result} меньше загаданного!`)
        } else if(result > number){
            alert(`Ваше число ${result} больше загаданного!`)
        }
    }
    return alert(`Вы не угадали число! Число: ${number}`)
}
// randomNumber();

// ----------------------------------------------------------------------------------------------
// Работа с датой и временем
let a = new Date();
console.log("Текущие дата и время: " + a);
let milliseconds = 60000;
let b = new Date(milliseconds);
console.log("Текущие дата и время с учетом количества миллисекунд от 1 января 1970 года: " + b);
let c = new Date("2017-06-24T10:53:35.583");
console.log("Сформированная дата из строки: " + c);
let d = Date.parse("2022-08-12T15:28:11.463");
console.log("Преобразование даты из строки в количество миллисекунд: " + d + " мс");
let errorDateFormat = Date.parse("202208.12T15.28.11.463");
console.log("Ошибка преобразования даты из строки в количество миллисекунд: " + errorDateFormat);
let f = Date.parse("2022-08-12T15:28:11.463+01:00");
console.log("Преобразование даты из строки в количество миллисекунд с учетом пояса: " + f + " мс");
let h = new Date(2015, 2);
console.log("Сформированная дата с необязательными параметрами по умолчанию: " + h);


let date = new Date(1978, 9, 5, 14, 52, 27, 786);
console.log("Сформированная дата из заданных перечислением компонентов: " + date);
let dateObjectForGettingComponents = {
    "Год": date.getFullYear(),
    "Месяц": date.getMonth(),
    "День": date.getDate(),
    "Часы": date.getHours(),
    "Минуты": date.getMinutes(),
    "Секунды": date.getSeconds(),
    "Миллисекунды": date.getMilliseconds(),
    "День недели": date.getDay(),
    "Timestamp (в мс)": date.getTime(),
    "Timezoneoffset (в мин)": date.getTimezoneOffset()
};
console.log("Объект с извлеченной информацией о компонентах строки с датой и временем с использованием функций get...:")
console.log(dateObjectForGettingComponents);

let dateObjectForSettingComponents = {
    "Год": date.setFullYear(1999),
    "Месяц": date.setMonth(11),
    "День": date.setDate(24),
    "Часы": date.setHours(11),
    "Минуты": date.setMinutes(22),
    "Секунды": date.setSeconds(33),
    "Миллисекунды": date.setMilliseconds(456)
};
console.log("Дата с уставновленными компонентами с использованием функции setTime():")
console.log(date);

let dateWithTimestampSetting =  date.setTime(120000);
console.log("Timestamp (в мс) с использованием функций set...:");
console.log(dateWithTimestampSetting + " мс");
console.log("Дата после установки timestamp (в мс) с использованием функций setTime():");
console.log(date);

// Автоисправление даты
let g = new Date(2024, 0, 32); 
console.log("При попытке установить 32 января будет выведено 1 февраля:");
console.log(g);

let k = new Date(2024, 1, 28); 
k.setDate(k.getDate()+2);
console.log("Прибавление двух дней к 28 февраля в високосном 2024 году:");
console.log(k);

let m = new Date(2025, 1, 28); 
m.setDate(m.getDate()+2);
console.log("Прибавление двух дней к 28 февраля в невисокосном 2025 году:");
console.log(m);

let n = new Date(2006, 3, 26);
console.log("Преобразование даты в число миллисекунд с использованием оператора +: " + +n + " мс");

// Измерение промежутка времени в миллисекундах
let startTime = Date.now(new Date());

for (let index = 0; index < 1000; index++) {
    console.log("Выполняется код. Ожидайте окончания исполнения цикла!"); 
}
let endTime = Date.now(new Date());
let difference = endTime - startTime;
console.log("Время исполнения кода составило: " + difference + " мс");


// Форматирование и вывод дат
let dateForFormatting = new Date(2014, 11, 31, 12, 30, 0);
let options = {
    era: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    weekend: "long",
    timezone: "UTC",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
}
console.log(dateForFormatting.toLocaleDateString("ru", options));
console.log(dateForFormatting.toLocaleDateString("en-US", options));

// Методы без локализации
console.log("Вывод даты и времени целиком: " + dateForFormatting.toString());
console.log("Вывод только даты: " +dateForFormatting.toDateString());
console.log("Вывод только времени: " +dateForFormatting.toTimeString());

// ----------------------------------------------------------------------------------------------
// Документация кода на JSDoc
/**
 * 
 * Функция перевода строки со временем в минуты
 * @param {string} time время в виде строки, например, "02:08". Может находиться в диапазоне от "00:00" до "23:59".
 * @return {number}  целое число в минутах. Например, time = "02:08" вернет 128.
 */
function timeToMinute(time){

}
