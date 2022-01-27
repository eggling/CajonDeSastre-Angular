import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { TestService } from './test.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent implements OnInit {
  titulo = 'Listado de empleados';
  empleados: Empleado[] = [];

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  constructor(private sv: TestService) {
    this.empleados = this.sv.DATA_EMPLEADOS;
  }

  ngOnInit(): void {}

  agregarEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    this.sv
      .runAlertService(`Empleado ${this.cuadroNombre} , ${this.cuadroApellido} Añadido 
    \n Salario: ${this.cuadroSalario} 
    \n Cargo: ${this.cuadroCargo}`);
    this.sv.add(miEmpleado);
    this.cuadroNombre = '';
    this.cuadroApellido = '';
    this.cuadroCargo = '';
    this.cuadroSalario = 0;
  }
  
}
