
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { SenddataComponent } from './components/senddata/senddata.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';



import { HttpClientModule } from '@angular/common/http';
import { GetemployeeService } from './service/getemployee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// pagination
import { NgxPaginationModule } from 'ngx-pagination';
// bs datepicker
import { BsDatepickerModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    SenddataComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule, // reason for pagination
    FormsModule,
    BsDatepickerModule.forRoot(), // reason for pretty date picker

    BrowserAnimationsModule,
    ToastrModule.forRoot(), // toastr module for showing toastr

    ReactiveFormsModule,


    Ng2SearchPipeModule // resposnsible for search


  ],
  providers: [GetemployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
