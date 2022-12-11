import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userrg',
  templateUrl: './userrg.component.html',
  styleUrls: ['./userrg.component.css']
})
export class UserrgComponent {
  constructor(private api:ApiService){}
  name=""
  address=""
  email=""
  phone=""
  password=""
  cpassword=""

  readValues=()=>
  {
    let data:any={"name":this.name,"address":this.address,"email":this.email,"phone":this.phone,"password":this.password,"cpassword":this.cpassword}
    console.log(data)
    if(this.password==this.cpassword && this.password != "" && this.email != ""){
    this.api.userreg(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status == "success") {
  
          alert("user registrated successfully")
  
          this.name=""
  
          this.address=""
          this.email=""
  
          this.phone=""
          this.password=""
          this.cpassword=""
  
        }else{
  
          alert("Something went wrong")
  
        }
        
      }
      
    )
    }
    else {
      alert("Something went wrong")
    }
  }
  
}