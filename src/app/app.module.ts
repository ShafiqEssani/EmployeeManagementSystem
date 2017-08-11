import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { SortbyPipe } from './pipes/sortby.pipe';
import { UtilService } from './services/util.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  
  {path: '', component: HomeComponent},
  {path: 'listings', component: ListingComponent},
  {path: 'form', component: FormComponent},
  {path: 'edit-card/:id', component: EditCardComponent} 
]

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    FormComponent,
    CardComponent,
    SearchPipe,
    EditCardComponent,
    SortbyPipe,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmpService, AngularFireDatabase, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
