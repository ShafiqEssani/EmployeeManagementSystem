import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { RouterModule, Routes } from '@angular/router'
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';
import { SearchPipe } from './pipes/search.pipe';
import { EmpService } from './services/emp.service';
import { EditCardComponent } from './edit-card/edit-card.component';


const appRoutes: Routes = [
  // {path: '', component: AppComponent},
 //{path: '', component: ListingComponent},
 
  // //{path: 'add-card', component: AddCardComponent},
  // {path: 'card/:id', component: CardComponent},
  {path: 'edit-card', component: EditCardComponent} 
]

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    FormComponent,
    CardComponent,
    SearchPipe,
    EditCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmpService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
