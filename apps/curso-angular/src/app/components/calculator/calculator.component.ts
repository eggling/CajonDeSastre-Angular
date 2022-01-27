import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  result: number = 0;
  value1: number = 0;
  value2: number = 0;
  constructor() {}

  ngOnInit(): void {}
  sum() {
    this.result = this.value1 + this.value2;
  }
  rest() {
    this.result = this.value1 - this.value2;
  }
  mult() {
    this.result = this.value1 * this.value2;
  }
  div() {
    this.result = parseFloat((this.value1 / this.value2).toFixed(2)); //De number a string y dos decimales con .toFixed y vuelta a number con parseFloat()
  }
}
