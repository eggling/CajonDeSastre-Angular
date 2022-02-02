import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { TestService } from '../test.service';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css'],
})
export class ActualizarEmpleadoComponent implements OnInit {
  index: number = 0;
  empleado: Empleado = new Empleado('', '', '', 0);
  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
  action!:string

  constructor(
    private route: ActivatedRoute,
    private Tsv: TestService,
    private router: Router
  ) {}

  actualizar() {
    this.empleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    this.Tsv.update(this.index, this.empleado);
    this.router.navigate(['/projects']);
  }
  delete(){
    this.Tsv.delete(this.index)
  this.router.navigate(['/projects']);
}
  ngOnInit(): void {
    //Captura el índice de la url
    this.index = this.route.snapshot.params['id'];
    
    this.empleado = this.Tsv.find(this.index);
    this.action = this.route.snapshot.queryParams['action']

    console.log(this.action);

    
    

    this.cuadroNombre = this.empleado.nombre;
    this.cuadroApellido = this.empleado.apellido;
    this.cuadroCargo = this.empleado.cargo;
    this.cuadroSalario = this.empleado.salario;
  }
}
