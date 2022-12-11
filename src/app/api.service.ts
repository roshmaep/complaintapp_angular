import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  userreg=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/userreg",dataToSend)
  }
  userLogin=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/userlogin",dataToSend)
  }
  getProfileDetails=(datatosend:any)=>{
    return this.http.post("http://localhost:8080/getUserById",datatosend)
  }
  addComplaints=(datatosend:any)=>{
    return this.http.post("http://localhost:8080/addcomplaint",datatosend)
  }
  viewMyComplaint=(datatosend:any)=>{
    return this.http.post("http://localhost:8080/getMyComplaintId",datatosend)
  }
  viewAllComplaint =()=>{
    return this.http.get("http://localhost:8080/viewallcomp")
  }

}
