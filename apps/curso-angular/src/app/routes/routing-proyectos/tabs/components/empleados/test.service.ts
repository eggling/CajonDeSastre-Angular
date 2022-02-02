import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private alert: AlertService) {}

  DATA_EMPLEADOS: Empleado[] = [
    new Empleado('Juan', 'Gonzalez', 'Presidente', 2400),
    new Empleado('Paco', 'Sanchez', 'Trabajador', 1200),
    new Empleado('Pepa', 'Meca', 'supervisora', 2000),
    new Empleado('Mario', 'Rodriguez', 'trabajador', 1800),
  ];
  runAlertService(msj: string) {
    this.alert.showMessage(msj);
  }

  add(miEmpleado: Empleado) {
    this.DATA_EMPLEADOS.push(miEmpleado);
  }
  find(i: number) {
    return this.DATA_EMPLEADOS[i];
  }
  update(index: number, empleado: Empleado) {
    console.log(empleado);
    
    this.DATA_EMPLEADOS[index] = new Empleado(
      empleado.nombre,
      empleado.apellido,
      empleado.cargo,
      empleado.salario
      );
      console.log(this.DATA_EMPLEADOS[index]);
    }
    delete(id:number){
      console.log(id)
      this.DATA_EMPLEADOS.splice(id, 1);
    }
}
