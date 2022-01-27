import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  fecha:string = '12-25-2021'

  constructor() { }

  ngOnInit(): void {
  }

  now(){
    this.fecha=Date()
  }
}
