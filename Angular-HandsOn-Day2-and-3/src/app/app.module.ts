import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { MenuComponent } from './menu/menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EditEmployeeReactiveComponent } from './edit-employee-reactive/edit-employee-reactive.component';
import { IncrementComponent } from './increment/increment.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewEmployeeComponent,
    EditEmployeeComponent,
    MenuComponent,
    MainPageComponent,
    PagenotfoundComponent,
    EditEmployeeReactiveComponent,
    IncrementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
