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
import { AddcomplaintComponent } from './addcomplaint/addcomplaint.component';
import { MycomplaintComponent } from './mycomplaint/mycomplaint.component';
import { ViewallcomplaintComponent } from './viewallcomplaint/viewallcomplaint.component';
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
},
{
  path:"addcom",
  component:AddcomplaintComponent
},{
  path:"mycomp",
  component:MycomplaintComponent
},
{
  path:"viewcomp",
  component:ViewallcomplaintComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    UserrgComponent,
    NavadminComponent,
    UserloginComponent,
    ViewprofileComponent,
    NavuserComponent,
    AddcomplaintComponent,
    MycomplaintComponent,
    ViewallcomplaintComponent
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
