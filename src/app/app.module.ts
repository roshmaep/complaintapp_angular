import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UserrgComponent } from './userrg/userrg.component';
import { NavadminComponent } from './navadmin/navadmin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { NavuserComponent } from './navuser/navuser.component';
const myRoute:Routes=[{
path:"",
component:AdminloginComponent
},{
  path:"userreg",
  component:UserrgComponent
},
{
  path:"navadmin",
  component:NavadminComponent
},
{
  path:"userlogin",
  component:UserloginComponent
},
{
  path:"viewprofile",
  component:ViewprofileComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    UserrgComponent,
    NavadminComponent,
    UserloginComponent,
    ViewprofileComponent,
    NavuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
