import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Empleado } from '../empleado.model';
import { TestService } from '../test.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {
  @Input() id: number = 0;
  @Input() empleado: Empleado = {
    nombre: '',
    apellido: '',
    cargo: '',
    salario: 0,
  };

  arrayCaract: string[] = [];

  constructor(private sv : TestService,private router : Router) {}

  ngOnInit(): void {}
  agregarCaract(nueva: string) {
    this.arrayCaract.push(nueva);
    this.sv.runAlertService(`Característica ${nueva} añadida`)
  }

 
}
