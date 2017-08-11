import { Component, OnInit, Input } from '@angular/core';
import { EmpService } from './../services/emp.service';
import { EMP } from './../emp';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var firebase: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']

})
export class CardComponent implements OnInit {

  @Input('emp') emp: EMP;
  
  imageUrl: any;
  Firstname: any;
  Lastname: any;
  Email: any;
  Dept: any;
  Title: any;
  PhoneNumber: any;

  constructor(
    private empService: EmpService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    let storageRef = firebase.storage().ref(); 
    let spaceRef = storageRef.child(this.emp.path);
    storageRef.child(this.emp.path).getDownloadURL().then(
      (url) => {
        this.imageUrl = url;
      }).catch((error) =>{
        console.log(error);
      });

  }

  onDeleteClick(e){
    var target = e.target || e.srcElement || e.currentTarget;
    console.log(target.attributes.id.nodeValue);
    this.empService.deleteCard(target.attributes.id.nodeValue);
  }

}

