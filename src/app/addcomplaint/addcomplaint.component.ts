import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcomplaint',
  templateUrl: './addcomplaint.component.html',
  styleUrls: ['./addcomplaint.component.css']
})
export class AddcomplaintComponent {
complaint=""
constructor(private api:ApiService){}
readValues=()=>{
  let data:any= { 
  "userid" : localStorage.getItem("userInfo"),
  "complaint" : this.complaint
 }
 this.api.addComplaints(data).subscribe(
  (response:any)=>{
    console.log(response)
  }

 )
}
}
