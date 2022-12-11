import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mycomplaint',
  templateUrl: './mycomplaint.component.html',
  styleUrls: ['./mycomplaint.component.css']
})
export class MycomplaintComponent {
  userId:any=""
  constructor(private api:ApiService){
    this.userId=localStorage.getItem("userInfo")
    let data:any={"userid":this.userId}
    console.log(data);
    api.viewMyComplaint(data).subscribe(
      (response:any)=>{
        console.log(response);
        this.myComplaint=response
      }
    )
    

  }

  myComplaint:any=[]
}
