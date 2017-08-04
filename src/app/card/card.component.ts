import { Component, OnInit, Input } from '@angular/core';
import { EMP } from './../emp';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('emp') emp: EMP;
  constructor() { }

  ngOnInit() {
    
  }

}
