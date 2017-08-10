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
  //id: any;
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
    //Getting ths ID
    
    //this.id = this.route.snapshot.params['id'];
    //console.log(this.id);
  
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

  onDeleteClick(e){
    var target = e.target || e.srcElement || e.currentTarget;
    console.log(target.attributes.id.nodeValue);
    this.empService.deleteCard(target.attributes.id.nodeValue);
  }

  onEditClick(e){

    var target = e.target || e.srcElement || e.currentTarget;
    var id = (target.attributes.id.nodeValue);

    this.router.navigate(['/edit-card']);

    this.empService.getCardDetails(id)
      .subscribe( data => {
        this.Firstname = data.Firstname;
        this.Lastname = data.Lastname;
        this.PhoneNumber = data.PhoneNumber;
        this.Email = data.Email;
        this.Title = data.Title;
        this.Dept = data.Dept;
      });

    let card = {
      Firstname: this.Firstname,
      Lastname: this.Lastname,
      PhoneNumber: this.PhoneNumber,
      Email: this.Email,
      Title: this.Title,
      Dept: this.Dept
    }

    console.log(card);
    
    //this.empService.

    //this.empService.editCard(target.attributes.id.nodeValue, card);

  }
}
