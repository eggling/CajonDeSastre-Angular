import { Component,} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  slider: number = 50
  title = 'curso-angular';

  logEvBuscador(e:string){
    console.log(e);
    
  }
}
