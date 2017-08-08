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
  id: any;
  imageUrl: any;

  constructor(
    private empService: EmpService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //Getting ths ID
    
    // this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
    
    //console.log(firebase.database().ref('/').snapshot.val());

    //console.log(this.route.snapshot.params);
    
    //this.id = this.emp.$key;
    //console.log(this.id);

    

    let storageRef = firebase.storage().ref(); 
    let spaceRef = storageRef.child(this.emp.path);
    storageRef.child(this.emp.path).getDownloadURL().then(
      (url) => {
        this.imageUrl = url;
      }).catch((error) =>{
        console.log(error);
      });

  }

  onDeleteClick(){
    
    this.empService.deleteCard(this.id);
  }

  onDetails(){
    
  
  }

}
