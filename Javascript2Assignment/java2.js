
  function calculate(a, b) {
    sum.textContent = a + b;
    difference.textContent = a - b;
    product.textContent = a * b;
    quotient.textContent = a / b;
  }

  var sum = document.getElementById("one");
  var difference = document.getElementById("two");
  var product = document.getElementById("three");
  var quotient = document.getElementById("four");

  var a = 5;
  var b = 7;

  calculate(a, b);
