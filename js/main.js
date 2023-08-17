console.log("console output")
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
console.log(fibonachiArray);


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
console.log(factorialOfNumber);

// Функция вычисления суммы и произведения цифр числа
// Примечание: используется еще одна форма записи функций
let addAndMultiplicate = function(num){
    num += "";
    

}
console.log(addAndMultiplicate(78));