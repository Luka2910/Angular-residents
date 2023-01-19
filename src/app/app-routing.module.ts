import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StanariComponent } from './stanari/stanari.component';
import { AddEditStanariComponent } from './add-edit-stanari/add-edit-stanari.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:StanariComponent},
  {path:'stanari',component:StanariComponent},
  {path:'addedit',component:AddEditStanariComponent},
  {path:'addedit/:id',component:AddEditStanariComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
