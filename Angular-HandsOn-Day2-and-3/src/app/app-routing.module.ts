import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditEmployeeReactiveComponent } from './edit-employee-reactive/edit-employee-reactive.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { IncrementComponent } from './increment/increment.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  {path:'',component:MainPageComponent,pathMatch:"full"},
  {path:'viewEmployee',component:ViewEmployeeComponent},
  {path:'main',component:MainPageComponent},
  {path:'editEmployee',component:EditEmployeeComponent},
  {path:'editEmployeeReactive',component:EditEmployeeReactiveComponent},
  {path:'increment',component:IncrementComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
