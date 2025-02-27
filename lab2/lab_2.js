// Задание №1: Напишите функцию, которая принимает три числовых параметра и возвращает произведение двух максимальных из них.
function inputNumbers(i)
{
  return parseFloat(prompt("Введите число №" + i))
}

function maxMultiply (a, b, c) {
  return ((a > b ? a : b)*(b > c ? b : c))
}

let a = inputNumbers(1)
let b = inputNumbers(2)
let c = inputNumbers(3)
if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c))
{
  alert("Введённые данные некорректны")
}
else 
{
  alert(`Введённые числа: ${a}, ${b}, ${c} \nПроизведение максимальных двух: ${maxMultiply(a, b, c)}`)
}

// Задание №2: Объявите функцию, которая принимает на вход два параметра: имя и звание. Значение звания по умолчанию «рядовой». 
// Продемонстрируйте вариант использования функции с передачей 1 и 2 параметров.

function printData(name, rank = "рядовой")
{
 alert (`Имя: ${name} \nЗвание: ${rank}`)
}
printData("Иван", prompt("Напишите звание:"))
printData("Пётр")

// Задание №3: Объявите функцию, которая принимает на вход функциональное
// выражение и набор параметров для его вызова, а возвращает результат вызова переданного функционального выражения.

function callFunctionWithParams(fn, params) {
  return fn(...params);
}

// Пример использования:
function amount(...array) {
  let sum = 0;  
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function length(...array) {
  return array.length;
}

console.log(callFunctionWithParams(amount, [1, 2, 3, -10, 21]));
console.log(callFunctionWithParams(length, [1, 2, 3, -10, 21]));

function greet(name, greeting) {
  return `${greeting}, ${name}!`;
}

console.log(callFunctionWithParams(greet, ["World", "Hello"]));

// Задание №4: Объявите функцию, которая принимает на вход целые числа. Для чётных значений функция возвращает стрелочное выражение
// возведения числа в квадрат, а для нечётных – стрелочное выражение возведения в куб.

function getPowerFunction(number) {
  if (number % 2 === 0) {
    return (x) => x ** 2; 
  } 
  else {
    return (x) => x ** 3; 
  }
}

const square = getPowerFunction(4); 
console.log(square(4)); 

const cube = getPowerFunction(3); 
console.log(cube(3)); 

// Задание №5: Напишите рекурсивную функцию для расчёта факториала числа n.

function factorial(n) {
  if (n < 0) {
    return ("Факториал определён только для неотрицательных чисел.");
  }
  if (n === 0) {
    return 1; 
  } 
  else {
    return n * factorial(n - 1); 
  }
}

let n = prompt("Введите положительное число")
if (Number.isNaN(n))
{
  alert("Введённые данные некорректны")
}
else 
{
  alert(`Факториал ${n} равен ` + factorial(n))
}
