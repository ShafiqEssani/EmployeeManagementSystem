import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';
import { SearchPipe } from './pipes/search.pipe';
import { EmpService } from './services/emp.service';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    FormComponent,
    CardComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
