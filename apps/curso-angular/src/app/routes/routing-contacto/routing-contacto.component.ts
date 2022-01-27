import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-routing-contacto',
  templateUrl: './routing-contacto.component.html',
  styleUrls: ['./routing-contacto.component.css']
})
export class RoutingContactoComponent {

  constructor(private router:Router){
    // auto go back in 5s
    setTimeout(() => {
      this.goHome()
    }, 5000);
    
  }
 goHome(){
  this.router.navigate([''])
 }

 
}
