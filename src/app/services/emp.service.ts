import { Injectable, Component } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map'; //for observable
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';

import { EMP } from '../emp';


@Injectable()
export class EmpService {

  emps: FirebaseListObservable<any[]>;
  emp: FirebaseObjectObservable<EMP>;
  folder: any;

  //public newEmp = new Subject<any>();

  constructor(private db: AngularFireDatabase) {
    this.folder = 'images';
    this.emps = this.db.list('/listings') as FirebaseListObservable<EMP[]>;
    
   }

  getAllEmps(){
    // return this.http.get('https://ems-a2.firebaseio.com/.json')
    //   .map(res => res.json());
    return this.emps;
  }

  getCardDetails(id) {
    this.emp = this.db.object('/listings/'+id) as FirebaseObjectObservable<EMP>;
    return this.emp;
  }


  addEmp(data){
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        data.image = selectedFile.name;
        data.path = path;
        return this.emps.push(data);
      });
    }
    //this.newEmp.next(data);
  }

  deleteCard(id){
    return this.emps.remove(id);
  }

  updateListing(id, EMP) {
    return this.emps.update(id, EMP);
  }

}
