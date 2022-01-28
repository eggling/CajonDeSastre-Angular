import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivaPersonalizadaComponent } from './components/directiva-personalizada/directiva-personalizada.component';
import { ActualizarEmpleadoComponent } from './components/empleados/actualizar-empleado/actualizar-empleado.component';
import { EmpleadoComponent } from './components/empleados/empleado/empleado.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { FormFieldAppearanceExample } from './components/form-field-appearance-example/form-field-appearance-example';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { UsersComponent } from './components/users/users.component';
import { HighlightDirective } from './highlight.directive';
import { HomeComponent } from './home/home.component';
import { RoutingProyectosComponent } from './routes/routing-proyectos/routing-proyectos.component';
import { RoutingQuienComponent } from './routes/routing-quien/routing-quien.component';
import { RoutingContactoComponent } from './routes/routing-contacto/routing-contacto.component';
import { CaractEmpleadoComponent } from './components/empleados/empleado/caract-empleado/caract-empleado.component';
import { CustomDatePipe } from './custom-date.pipe';

//Imports de Angular Material
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatDividerModule} from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{BidiModule} from '@angular/cdk/bidi'



@NgModule({
  declarations: [
    
    CustomDatePipe,

    AppComponent, 
    HomeComponent,
    BuscadorComponent,
    HomeComponent,
    CalculatorComponent,
    DataBindingComponent,
    DirectivaPersonalizadaComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    FormFieldAppearanceExample,
    FormReactiveComponent,
    PipeComponent,
    TabsComponent,
    UsersComponent,
    ActualizarEmpleadoComponent,
    RoutingContactoComponent,
    HighlightDirective,
    TabsComponent,
    CaractEmpleadoComponent,
    RoutingQuienComponent,
    RoutingProyectosComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    BrowserAnimationsModule,
    BidiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
