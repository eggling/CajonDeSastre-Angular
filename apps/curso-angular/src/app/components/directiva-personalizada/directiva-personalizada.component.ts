import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-personalizada',
  templateUrl: './directiva-personalizada.component.html',
  styleUrls: ['./directiva-personalizada.component.css'],
})
export class DirectivaPersonalizadaComponent implements OnInit {
  date = new Date().toLocaleString('es-ES');
  @Input() showDate:boolean = true;
  //Aunque está declarada como true, el padre la define como false por el Input
  
  constructor() {}

  ngOnInit(): void {
    this.intervalo();
  }
  handleButton() {
    this.showDate = !this.showDate;
  }

  intervalo() {
    setInterval(() => {
      this.date = new Date().toLocaleString('es-ES');
    }, 1000);
  }
}
