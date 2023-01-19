import { Injectable } from '@angular/core';
import { Stanari } from '../model/stanari';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StanariService {

  constructor(private http:HttpClient) { }

  url:string='https://63b59b2f58084a7af39a1cf4.mockapi.io/stanari'
  
  
  getResident(){
    return this.http.get<Stanari[]>(this.url)
  }
  getResidentById(id:number){
    return this.http.get<Stanari>(this.url+'/'+id);
  }
  postResident(stanar:Stanari){
    this.http.post(this.url,stanar).subscribe((responseData)=>{
      console.log(responseData);
    })
  }
  updateResident(id:number,stanar:Stanari){
    this.http.put(this.url+'/'+id,stanar).subscribe((responseData)=>{
      console.log(responseData);
    })
  }
  deleteResident(id:number){
    this.http.delete(this.url+'/'+id).subscribe((responseData)=>{
      console.log(responseData);
    });
  }
  addeditResident(stanar:Stanari){
    if(stanar.id!==null){
      this.updateResident(stanar.id,stanar)
    }else{
      this.postResident(stanar);
    }
  }
}
