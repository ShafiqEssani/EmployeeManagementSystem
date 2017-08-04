import { Component, OnInit, Input } from '@angular/core';
import { EMP } from './../emp';
declare var firebase: any;

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

  delete() {
    var adaRef = firebase.database().ref('users/ada');
    adaRef.remove()
      .then(function () {
        console.log("Remove succeeded.")
      })
      .catch(function (error) {
        console.log("Remove failed: " + error.message)
      });
  }

}
