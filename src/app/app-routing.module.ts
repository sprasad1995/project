import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SenddataComponent } from './components/senddata/senddata.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'send', component: SenddataComponent},
  // for unauthorize route
  {path: '**', component: PagenotfoundComponent} // it will go to the page not found page if there is no valid route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
