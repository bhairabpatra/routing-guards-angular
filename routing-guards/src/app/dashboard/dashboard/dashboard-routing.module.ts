import { UserComponent } from './../user/user.component';
import { UpdateprodcutsComponent } from './../updateprodcuts/updateprodcuts.component';
import { AddproductsComponent } from './../addproducts/addproducts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [

  { path: '', component: DashboardComponent ,

  children: [
    {path:'add', component:AddproductsComponent},
    {path:'update', component:UpdateprodcutsComponent},
    {path:'user', component:UserComponent}
  ]
 },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
