import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stanari } from '../model/stanari';
import { StanariService } from '../servis/stanari.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-stanari',
  templateUrl: './add-edit-stanari.component.html',
  styleUrls: ['./add-edit-stanari.component.css']
})
export class AddEditStanariComponent implements OnInit {

  constructor(private servis:StanariService,private router:Router,private route:ActivatedRoute) { }

  formStanari:FormGroup;
  ngOnInit(): void {
    this.formStanari=new FormGroup({
      id:new FormControl(),
      ime:new FormControl(),
      prezime:new FormControl(),
      adresa:new FormControl(),
      datumuseljenja:new FormControl()
    })
    if(this.route.snapshot.queryParams['edit']=='true'){
      this.servis.getResidentById(this.route.snapshot.params['id']).subscribe((data)=>{
        console.log(data);
        this.formStanari.setValue(data);
      })
      
    }
  }
  sacuvaj(){
    let noviStanar:Stanari;
    noviStanar=this.formStanari.getRawValue();
    console.log(noviStanar);
    this.servis.addeditResident(noviStanar);
  }
  nazad(){
    this.router.navigate(['/stanari'])
  }

}
