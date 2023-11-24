//Конструктор, оператор "new"

// 2)Создайте калькулятор при помощи конструктора, new Calculator
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

function Calculator() {
  this.first = 0;
  this.second = 0;

  this.read = function (num, num2) {
    this.first = num
    this.second = num2
  };

  this.sum = function () {
    return this.first + this.second
  }
  this.mul = function () {
    return this.first * this.second
  }
}

let calculator = new Calculator();
calculator.read(5, 10);

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());


// 3)Создайте new Accumulator
// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function (num) {
     this.value = this.value + num
  }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(1); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(2); // прибавляет введённое пользователем значение к текущему значению

console.log(accumulator.value); // выведет сумму этих значений