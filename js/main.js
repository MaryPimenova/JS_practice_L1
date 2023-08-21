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


// --------------------------------------------------------------------------------------
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

// --------------------------------------------------------------------------------------
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

// --------------------------------------------------------------------------------------
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

// --------------------------------------------------------------------------------------
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

// --------------------------------------------------------------------------------------
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

// --------------------------------------------------------------------------------------
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
console.log("Вывод только даты: " + dateForFormatting.toDateString());
console.log("Вывод только времени: " + dateForFormatting.toTimeString());

// ----------------------------------------------------------------------------------------------
// Документация кода на JSDoc
/**
 * 
 * Функция перевода строки со временем в минуты
 * @param {string} time время в виде строки, например, "02:08". Может находиться в диапазоне от "00:00" до "23:59".
 * @return {number}  целое число в минутах. Например, time = "02:08" вернет 128.
 */
function timeToMinute(time){
    try {
        let hour = +time.split(":")[0];  // получение и конвертация в число значения часа из массива time
        let minute = +time.split(":")[1];  // получение и конвертация в число значения минуты из массива time
        if(!(hour>=0 && hour<=23) || !(minute>=0 && minute<=59)){ // ошибка диапазона аргумента или его типа
            throw new RangeError("Аргумент должен быть в формате  'hh:mm', где 'hh' должен быть от 0 до 23, а 'mm' - от 0 до 59. 'hh' и 'mm' должны быть числами и разделяться знаком ':'")
        }
        return  hour * 60 + minute; // возвращаем результат, если ошибок нет
    } catch(error){
        console.log(error)
        // alert(error.name); // RangeError
        // alert(error.message); // "Аргумент должен быть в формате ... "
        // alert(error.stack); // RangeError: "Аргумент должен быть в формате ... " at (...стек вызовов)
    }
}
console.log(timeToMinute("62:08"));
console.log(timeToMinute("02:08"));


/**
 * Проверка на число
 * @param {number} n любое число или строка
 * @return {boolean} возвращает true если аргумент является числом, в противном случае false
 */
function isNumber(n) {
	return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}


/**
 * Случайное число в диапазоне от min до max
 * @param {number} min минимальное число
 * @param {number} max максимальное число
 * @return {number} случайное число в указанном диапазоне
 */
function randomInteger(min, max) {
	// случайное число от min до (max+1)
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

/**
* Функция преобразует минуты в строку с временем.
* @param {number} min время в виде целого числа, например 62. Может быть отрицательным числом.
* @return {string} время в виде строки. Например min=62 вернет "01:02",
* min=-5 вернет "23:55", min=1439 вернет "23:59", min=1440 вернет "00:00", min=2882 вернет "00:02".
*/
function minuteToTime(min) {
	try {
		let h, m, s
		//Ошибка типа аргумента
		if (!isNumber(min)) {
			throw new TypeError("Аргумент функции должен быть числом")
		}
		if (min < 0 || min > 1439) {
			let newMinute = min
			//-60 станет 1380 (-1 час = 23 часа)
			if (min < 0) {
				newMinute = min + (Math.trunc(Math.abs(min) / 1440) + 1) * 1440
			}
			let tmpHour = Math.trunc(newMinute / 60)
			let tmpMinute = newMinute % 60
			h = tmpHour % 24 + ""
			m = Math.trunc(tmpMinute % 60) + ""
			s = Math.trunc((tmpMinute % 60 - Math.trunc(tmpMinute % 60)) * 60) + ""
		} else {
			h = Math.trunc(min / 60) + ""
			m = Math.trunc(min % 60) + ""
			s = Math.trunc((min % 60 - Math.trunc(min % 60)) * 60) + ""
		}
		if (h.length === 1) h = "0" + h
		if (m.length === 1) m = "0" + m
		if (s.length === 1) s = "0" + s
		return h + ":" + m// + ":" + s
	} catch (e) {
		//Если ошибка была, то выводим в консоль сообщение
		console.log(e)
	}
}

/**
* Функция добавляет/вычитает из строки с временем время в минутах.
* @param {string} time время в виде строки, например "02:08".
* @param {number} change сколько минут добавить. Если отрицательное число, то вычесть.
* @return {string} время в виде строки. Например time="00:02" change=-5 вернет "23:57".
*/
function timeDivMinute(time, change) {
	return minuteToTime(timeToMinute(time)+change)
}

/**
* Функция вычитает или складывает две строки времени.
* @param {string} time1 время в виде строки, например "02:08".
* @param {string} time2 время в виде строки, например "01:03".
* @param {string} operator сложить строки "+", вычесть строки "-"
* @return {string} время в виде строки. Например time1="02:02" time2="01:01" operator="-" вернет "01:01".
*/
function timeDivTime(time1, time2, operator) {
	if(operator==="-")
		return minuteToTime(timeToMinute(time1)-timeToMinute(time2))
	if(operator==="+")
		return minuteToTime(timeToMinute(time1)+timeToMinute(time2))
}

/**
* Перевести строку в секунды или миллисекунды.
* @param {string} time время в виде строки, например "00:01".
* @param {string} type может быть "s" для перевода в секунды и "ms" для перевода в миллисекунды.
* @return {number} число секунд или миллисекунд. Например time="00:01" type="s" вернет 60.
*/
function changeTypeTime(time, type) {
	if(type==="s")
		return timeToMinute(time)*60
	if(type==="ms")
		return timeToMinute(time)*60*1000
}

/**
* Проверяет является ли аргумент временем
* @param {string} time строка времени типа "01:26"
* @return {boolean} true или false
*/
function isTime(time) {
	return isNumber(+time[0])
	&& isNumber(+time[1])
	&& time[2]==":"
	&& isNumber(+time[3])
	&& isNumber(+time[4])
}

/**
 * Сравнивает две строки с временем
 * @param {string} time1 первая строка с временем
 * @param {string} time2 вторая строка с временем
 * @return {number} 1 если первый аргумент больше второго, -1 если первый аргумент меньше второго, 0 если аргументы равны
 */
function compareTime(time1, time2) {
	let timeStr1 = timeToMinute(time1)
	let timeStr2 = timeToMinute(time2)
	if(timeStr1>timeStr2) return 1
	else if(timeStr1<timeStr2) return -1
	else if(timeStr1===timeStr2) return 0
	else console.log('Ошибка при сравнении двух строк с временем')
}
/**
 * Возвращает правильное склонение для указанного числа если задать вопрос: какое количество секунд, минут, часов, дней, недель, месяцев или лет?
 * @param {number} num целое число
 * @param {string} type тип возвращаемого значения (s-секунды, min-минуты, h-часы, d-дни, w-недели, m-месеца, y-годы)
 * @return {string} вернет строку: num + правильное склонение слова "секунда", "минута", "час", "день", "неделя", "месяц" или "год", в зависимости от параметра type (например: 1 день, 254 года, 2114 недель)
 */
function decOfNum(num, type) {
	//Все варианты склонений для каждого из слов
	let text = [
		["секунда", "секунды", "секунд"],
		["минута", "минуты", "минут"],
		["час", "часа", "часов"],
		["день", "дня", "дней"],
		["неделя", "недели", "недель"],
		["месяц", "месяца", "месяцев"],
		["год", "года", "лет"],
	]
	//Число от 0 до 6 для параметров s, min, h, d, w, m, y соответственно
	let tmpType
	//Проверка на правильность аргументов
	try {
		//Если первый аргумент не явялется целым числом
		if(!Number.isInteger(+num)) throw new TypeError("Первый аргумент должен быть целым числом");
		switch(type) {
			case "s": tmpType=0; break
			case "min": tmpType=1; break
			case "h": tmpType=2; break
			case "d": tmpType=3; break
			case "w": tmpType=4; break
			case "m": tmpType=5; break
			case "y": tmpType=6; break
			//Если второй аргумент не соответствует не одному из доступных, то ошибка
			default: throw new TypeError("Второй аргумент должен быть строкой: s, min, h, d, w, m или y");
		}
	} catch(e) {
		//Вывести ошибку в консоль, если была и выйти из функции
		console.log(e)
		return
	}
	//Преобразовать целую часть числа num в строку (дробная часть отбрасывается)
	num=num+""
	//Для чисел 5, 6, 7, 8, 9 или 0 
	//Для чисел состоящих из более двух цифр и оканчивающихся на цифру 5, 6, 7, 8, 9 или 0 (например: 55 дней, 38 дней, 47 дней)
	//Для чисел состоящих из более двух цифр, у которых предпоследняя цифра равна 1 (например: 11 лет, 116 часов, 214 дней)
	if(
		(num.length>=2 && num[num.length-1]==5) || 
		(num.length>=2 && num[num.length-1]==6) || 
		(num.length>=2 && num[num.length-1]==7) || 
		(num.length>=2 && num[num.length-1]==8) || 
		(num.length>=2 && num[num.length-1]==9) || 
		(num.length>=2 && num[num.length-1]==0) ||
		(num.length>=2 && num[num.length-2]==1) || 
		num==5 || num==6 || num==7 || num==8 || num==9 || num==0
	)
		return num+" "+text[tmpType][2]
	//Для чисел 2, 3 или 4
	//Для чисел состоящих из более двух цифр, у которых предпоследняя цифра не равна 1, а последняя цифра равна 2, 3 или 4 (например: 22 минуты, 234 часа, 6423 месяца)
	if(
		(num.length>=2 && num[num.length-1]==2 && num[num.length-2]!==1) || 
		(num.length>=2 && num[num.length-1]==3 && num[num.length-2]!==1) || 
		(num.length>=2 && num[num.length-1]==4 && num[num.length-2]!==1) ||
		num==2 || num==3 || num==4
	)
		return num+" "+text[tmpType][1]
	//Для числа 1
	//Для чисел состоящих из более двух цифр, у которых предпоследняя цифра не равна 1, а последняя цифра равна 1 (например: 21 год, 631 день, 48251 секунда)
	if(
		(num.length>=2 && num[num.length-1]==1 && num[num.length-2]!==1) || 
		num==1
	)
		return num+" "+text[tmpType][0]
}



//------------------------------------------------------------------------------------
// ООП (Объектно-ориентированное программирование)
/** let admin = {
    rules: 777,
    isAdmin(){
        console.log("Я - админ " + this.name + ", мои права: " + this.rules)
    }
}
// let user = {
//     name: "Ivan",
//     age: 20,
//     __proto__: admin
// }
function User(name, age){  // функция-конструктор (наименование с большой буквы)
    this.name = name;
    this.age = age;
    this.myInfo = function(){
        console.log("Меня зовут " + this.name + ", мой возраст: " + this.age)
    }
    this.__proto__ = admin;
}
let u1 = new User("Petr", 23);
let u2 = new User("Alice", 56);
let u3 = new User("Ivanna", 14); */

class User{
    constructor(name, age, admin = false){
        this.name = name;
        this.age = age;
        this.admin = admin;
    }
    myInfo(){
        console.log("Меня зовут " + this.name + ", мой возраст: " + this.age)
        if(this.admin == true){
            console.log("Я админ!")
        }
    }
}
class Moderator extends User {
    constructor(name, age, admin = false, moderator = true){
        super(name, age, admin)  // обращение к уже существующим элементам в родительском конструкторе
        this.moderator = moderator;      // новый элемент конструктора, которого не было у родителя
    }
    addPost(){
        console.log("New Post");
    }
    myInfo(){
        // console.log("Меня зовут " + this.name + ", мой возраст: " + this.age)
        super.myInfo(); // данная строка приведет к полному выполнению соответствующего метода родительского объекта
        console.log("Я модератор!")
    }
}
let u1 = new User("Petr", 23);
let u2 = new User("Alice", 56, true);
let u3 = new User("Ivanna", 14); 
let m1 = new Moderator("Monica", 44, true);
let m2 = new Moderator("Jessica", 32, false);



/**
 * Класс, описывающий человека
 * @param   {String} fio ФИО в формате "Фамилия Имя Отчество"
 * @param   {String} birthday день рождения в формате "24.11.1994"
 * @param   {String} numbers в формате "номер", если больше 2 номеров, то в формате "номер1, номер2"
 * @param   {Number} room номер комнаты
 */
class Person {
    constructor(fio, birthday, numbers="", room=""){
        let name = fio.toLowerCase().split(" ");
        this.name = {};    // инициализация пустого объекта с ФИО
        this.name.f = name[0][0].toUpperCase() + name[0].slice(1); // взять первую букву фамилии, перевести в верхний регистр и склеить с остатком строки фамилии
        this.name.i = name[1][0].toUpperCase() + name[1].slice(1); // взять первую букву имени, перевести в верхний регистр и склеить с остатком строки имени
        this.name.o = name[2][0].toUpperCase() + name[2].slice(1); // взять первую букву отчества, перевести в верхний регистр и склеить с остатком строки отчества

        let date = birthday.split(".");
        this.date = {};    // инициализация пустого объекта с ДР
        this.date.d = +date[0];
        this.date.m = +date[1];
        this.date.y = +date[2];

        // let phone = numbers.split(", ");
        // this.date = [];    // инициализация пустого массива с номерами
        // for(let i = 0; i <phone.length; i++){
        //     this.numbers.push(phone[i])
        // }

        this.numbers = numbers.split(", "); 

        this.room = +room;
    }
    static month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    /** 
     * Вывод ФИО
     * @return {String} Строка формата "Фамилия Имя Отчества"
     */
    getFIO(){
        return `${this.name.f} ${this.name.i} ${this.name.o}`
    }
    /** 
     * Вывод дня рождения
     * @return {String} Строка формата "01 июня 1997 года"
     */
    getBirthday(){
        return `${this.date.d} ${Person.month[this.date.m - 1]} ${this.date.y} года`
    }
    /** 
     * Вывод Фамилия_Имя_Отчество.расширение
     * @param {String} extension расширение, например, ".jpg" или ".png"
     * @return {String} наименования выходного изображения
     */
    getImagePath(extension){
        return `${this.name.f}_${this.name.i}_${this.name.o}.${extension}`
    }
    /** 
     * Вывод либо всех номеров, либо только первого (основного)
     * @param {Boolean} allNumbers если true, то вывести все номера, если false, то только первый
     * @return {String} строка формата "89074747874, 89472837489"
     */
    getPhoneNumbers(allNumbers){
        if(this.numbers.length == 0 || this.numbers[0].length == 0){
            return undefined;
        }
        if(allNumbers){
            return this.numbers.join(", ");
        } else{
            return this.numbers[0];
        }
    }

}
let person1 = new Person("Иванов иВан ИвАнОВич", "31.11.1995", "32, 76, 2423", 534);
let person2 = new Person("Яковлева Виктория Игоревна", "11.11.1975", "880005553535, 68568, 2487623", 114);
let person3 = new Person("Мухоморова Кристина Агиллеровна", "05.12.1984", " , 9843, 343", 98);
let person4 = new Person("Пух Карп иосифович", "01.04.2005");
console.log("ФИО: " + person3.getFIO());
console.log("День рождения: " + person1.getBirthday());
console.log("Наименование картинки: " + person4.getImagePath("jpg"));
console.log("Телефонные номера: " + person1.getPhoneNumbers());
console.log("Телефонные номера: " + person2.getPhoneNumbers(true));
console.log("Телефонные номера: " + person3.getPhoneNumbers());
console.log("Телефонные номера: " + person3.getPhoneNumbers(true));
console.log("Телефонные номера: " + person4.getPhoneNumbers());

// function Persona(){  // уйдет в бесконечный NaN, т.к. this является ссылкой на экземпляр каждой функции по-отдельности, т.е. функция grow не имеет информации об age из функции Persona
//     this.age = 0;
//     setInterval(function grow(){
//         this.age++;
//         console.log(this.age);
//     }, 10);
// }
// let p = new Persona();   

// function Persona(){  // замена на стрелочную функцию, теперь функция знает контекст переменной age
//     this.age = 0;
//     setInterval(() => {
//         this.age++;
//         console.log(this.age);
//     }, 10);
// }
// let p = new Persona();   


let arr = ["a", "b", "c"];
let entries = arr.entries();
let keys = arr.keys();
let values = arr.values();
console.log(...entries);
console.log(...keys);
console.log(...values);

let set = new Set;
set.add(1);
set.add(2);
set.add(3);
set.add(1);    // будет проигнорировано, т.е. элемент 1 уже есть в множестве
console.log("Исходное множество: " + set);
console.log("Признак наличия элемента 4 в множестве: " + set.has("4"));
console.log("Размер множества: " + set.size);
console.log("Результат после удаление элемента 2 в множестве: " + set.delete(2));
console.log("Результат после очистки множества: " + set.clear);


let arr1 = [1, 5, 4, 7, 8, 91, 1, 4, 5];
console.log("Исходный массив данных с дубликатами: " + arr1);
let arr2 = [...new Set(arr1)];
console.log("Массив данных после удаления дубликатов: " + arr2);

