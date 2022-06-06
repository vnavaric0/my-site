function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    num = prompt('Введите число', '');
    this.value += Number(num);
  }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value);