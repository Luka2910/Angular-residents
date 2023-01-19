import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

const MaterialComponent:any=[MatTableModule,MatButtonModule,MatInputModule,MatDatepickerModule,ReactiveFormsModule,MatNativeDateModule]


@NgModule({
  imports: [MaterialComponent],
  exports:[MaterialComponent]
})
export class MaterialModule { }
