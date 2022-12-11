import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallcomplaint',
  templateUrl: './viewallcomplaint.component.html',
  styleUrls: ['./viewallcomplaint.component.css']
})
export class ViewallcomplaintComponent {

  constructor(private api:ApiService){
    api.viewAllComplaint().subscribe(
      (response:any)=>{
        this.allComplaints=response
      }
    )
  }

  allComplaints:any=[]
}
