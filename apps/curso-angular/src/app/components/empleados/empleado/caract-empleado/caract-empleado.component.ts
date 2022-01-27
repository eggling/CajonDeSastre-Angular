import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caract-empleado',
  templateUrl: './caract-empleado.component.html',
  styleUrls: ['./caract-empleado.component.css']
})
export class CaractEmpleadoComponent implements OnInit {

  @Output() caractEvent = new EventEmitter<string>();
  nuevaCaract:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  addData(value:string){
    this.caractEvent.emit(value)
    this.nuevaCaract = ''
  }
}
