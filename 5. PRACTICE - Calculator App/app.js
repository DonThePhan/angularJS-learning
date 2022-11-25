const app = angular.module('calculatorApp', []);

function CalculatorCtrl() {
  this.operate = () => {
    switch (this.operator) {
      case '+':
        this.answer = this.value1 + this.value2;
        break;
      case '-':
        this.answer = this.value1 - this.value2;
        break;
      case '*':
        this.answer = this.value1 * this.value2;
        break;
      case '/':
        this.answer = this.value1 / this.value2;
        break;
    }
  };

  this.assignOperator = (operator) => {
    this.operator = operator;
    console.log(this.operator);
  };
}
app.controller('CalculatorCtrl', CalculatorCtrl);
