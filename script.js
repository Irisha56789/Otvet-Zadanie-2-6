// Задание 1: Определение функций (Function Declaration)

function greet(name) {
    console.log(`Привет, ${name}!`);
}

// Пример вызова функции:
greet("Иван");

// Задание 2: Function Expression

let multiply = function(a, b) {
    return a * b;
};

// Пример вызова функции:
let result = multiply(3, 4);
console.log(result); 

// Задание 3: Анонимные функции

(function() {
    console.log("Анонимная функция вызвана!");
})();

// Задание 4: Самовызывающаяся функция (IIFE)

(function() {
    console.log("IIFE выполнена");
})();

// Задание 5: Вложенные функции

function outer() {
    function inner() {
        return "Внутренняя функция";
    }
    return inner(); // Вызываем inner и возвращаем её результат
}

// Пример вызова функции:
let message = outer();
console.log(message); 

// Задание 6: Привязка функции к контексту (bind)

// Создаем объект person
let person = {
    name: "Иван",
    sayName: function() {
        console.log(this.name);
    }
};

// Привязываем функцию sayName к объекту person
let boundSayName = person.sayName.bind(person);

// Пример вызова
boundSayName();

//Задание 7: Замыкания

function counter() {
    let count = 0; // Инициализируем счетчик

    return function() {
        count++; // Увеличиваем счетчик на 1
        console.log(count); // Выводим текущее значение счетчика
    };
}

// Пример использования:
let countFunction = counter(); // Создаем новую функцию-счетчик
countFunction(); // Вывод: 1
countFunction(); // Вывод: 2
countFunction(); // Вывод: 3

// Задание 8: Передача функции в качестве аргумента

// Функция для умножения двух чисел
function multiply(a, b) {
    return a * b;
}

// Функция execute, которая принимает функцию и два числа
function execute(func, num1, num2) {
    return func(num1, num2); // Выполняем переданную функцию с заданными числами
}

// Пример использования
let result1 = execute(multiply, 2, 5);
console.log(result1);