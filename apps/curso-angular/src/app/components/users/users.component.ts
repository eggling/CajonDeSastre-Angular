import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  title = 'Registro de usuarios';
  msj = '';
  registrado: boolean = false;
  nombre: string = '';
  apellido: string = '';
  cargo:string = ''
  entradas=[
    {titulo :'Python cada día mas presente'},
    {titulo :'donde quedó pascal'},
    {titulo :'kotlin para tus apps móviles'}
  ]

  registrarUsuario() {
    this.msj = 'usuario registrado con éxito';
    this.registrado = true;
  }

  constructor() {
  }
  
  
  ngOnInit(): void {  }
}
