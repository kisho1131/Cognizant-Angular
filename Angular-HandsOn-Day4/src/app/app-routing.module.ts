import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',component:MainPageComponent,pathMatch:"full"},
  {path:'main',component:MainPageComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'home',component:HomeComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'users/:id',component:UserdetailsComponent},
  {path:'users',component:UsersComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
