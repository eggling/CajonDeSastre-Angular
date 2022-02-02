import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './routes/routing-home/home.component';
import { RoutingContactoComponent } from './routes/routing-contacto/routing-contacto.component';
import { RoutingProyectosComponent } from './routes/routing-proyectos/routing-proyectos.component';
import { RoutingQuienComponent } from './routes/routing-quien/routing-quien.component';
import { ActualizarEmpleadoComponent } from './routes/routing-proyectos/tabs/components/empleados/actualizar-empleado/actualizar-empleado.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects',
    component: RoutingProyectosComponent,
    children: [
      {
        path: 'update/:id',
        component: ActualizarEmpleadoComponent,
      },
    ],
  },
  { path: 'contact', component: RoutingContactoComponent },
  { path: 'who', component: RoutingQuienComponent },
  {
    path: 'update/:id',
    component: ActualizarEmpleadoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
