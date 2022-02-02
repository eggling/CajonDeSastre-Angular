import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  
  showMessage(msj: string) {
    alert(msj);
  }
}
