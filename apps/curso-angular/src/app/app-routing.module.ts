import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoutingContactoComponent } from './routes/routing-contacto/routing-contacto.component';
import { RoutingProyectosComponent } from './routes/routing-proyectos/routing-proyectos.component';
import { RoutingQuienComponent } from './routes/routing-quien/routing-quien.component';

const routes : Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: RoutingProyectosComponent },
  { path: 'contact', component: RoutingContactoComponent },
  { path: 'who', component: RoutingQuienComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }