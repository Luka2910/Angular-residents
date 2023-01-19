import { Component, OnInit } from '@angular/core';
import { StanariService } from '../servis/stanari.service';
import { Stanari } from '../model/stanari';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-stanari',
  templateUrl: './stanari.component.html',
  styleUrls: ['./stanari.component.css']
})
export class StanariComponent implements OnInit {

  constructor(private servis:StanariService,private router:Router) { }

  data2:any;
  dataSource=new MatTableDataSource();


  ngOnInit(): void {
    this.servis.getResident().subscribe((responseData)=>{
      console.log(responseData);
      this.data2=responseData;
      this.dataSource.data=this.data2;
    })
  }

  displayedColumns:string[]=['id','ime','prezime','adresa','datumuseljenja','akcija']

  add(){
    this.router.navigate(['/addedit']);
  }
  edit(id:number){
    this.router.navigate(['/addedit/'+id],{queryParams:{edit:'true'}})
  }
  izbrisi(id:number){
    let response=confirm('Da li ste sigurni da zelite da obrisete?')
    if(response){
      this.servis.deleteResident(id)
    }
  }

  filter(event:any){
    if(!event.target.value){
      return;
    }
    this.dataSource.filter=event.target.value
  }
}
