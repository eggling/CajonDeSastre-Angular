import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  @Input() buscador:string = '';
  @Output() eventoBuscador = new EventEmitter<string>()

  constructor() { 
  }
  
  enviar(e:string){
    this.eventoBuscador.emit(e)
  }

  ngOnInit(): void {
  }
}
