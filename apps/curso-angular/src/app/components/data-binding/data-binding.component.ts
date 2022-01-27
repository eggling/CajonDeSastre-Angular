import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  expresion = 'esta es una expresión';
  isSpecial = true;
  text = 'escribe aquí';

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    console.log('Click !!');
    this.isSpecial = !this.isSpecial;
  }
  handleInput() {
    console.log(this.text);
  }
  reset() {
    this.text = '';
  }
}
