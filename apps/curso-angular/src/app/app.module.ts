import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BuscadorComponent } from './routes/routing-home/components/buscador/buscador.component';
import { CalculatorComponent } from './routes/routing-proyectos/tabs/components/calculator/calculator.component';
import { DataBindingComponent } from './routes/routing-home/components/data-binding/data-binding.component';
import { DirectivaPersonalizadaComponent } from './routes/routing-home/components/directiva-personalizada/directiva-personalizada.component';
import { FormFieldAppearanceExample } from './routes/routing-home/components/form-field-appearance-example/form-field-appearance-example';
import { FormReactiveComponent } from './routes/routing-proyectos/tabs/components/form-reactive/form-reactive.component';
import { PipeComponent } from './routes/routing-proyectos/tabs/components/pipe/pipe.component';
import { TabsComponent } from './routes/routing-proyectos/tabs/tabs.component';
import { UsersComponent } from './routes/routing-proyectos/tabs/components/users/users.component';
import { HighlightDirective } from './highlight.directive';
import { HomeComponent } from './routes/routing-home/home.component';
import { RoutingProyectosComponent } from './routes/routing-proyectos/routing-proyectos.component';
import { RoutingQuienComponent } from './routes/routing-quien/routing-quien.component';
import { RoutingContactoComponent } from './routes/routing-contacto/routing-contacto.component';
import { EmpleadosComponent } from './routes/routing-proyectos/tabs/components/empleados/empleados.component';
import { EmpleadoComponent } from './routes/routing-proyectos/tabs/components/empleados/empleado/empleado.component';    
import { CaractEmpleadoComponent } from "./routes/routing-proyectos/tabs/components/empleados/empleado/caract-empleado/caract-empleado.component";
import { ActualizarEmpleadoComponent } from './routes/routing-proyectos/tabs/components/empleados/actualizar-empleado/actualizar-empleado.component';

import { CustomDatePipe } from './custom-date.pipe';

//Imports de Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BidiModule} from '@angular/cdk/bidi'



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
    EmpleadoComponent,
    EmpleadosComponent,
    FormFieldAppearanceExample,
    FormReactiveComponent,
    PipeComponent,
    TabsComponent,
    UsersComponent,
    ActualizarEmpleadoComponent,
    RoutingContactoComponent,
    HighlightDirective,
    TabsComponent,
    RoutingQuienComponent,
    RoutingProyectosComponent,
    CaractEmpleadoComponent
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
