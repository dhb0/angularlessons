import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../admin/login/login.component';
import { AdminlistComponent } from './adminlist/adminlist.component';

const routes: Routes = [
  {
    path:"adminlogin",
    component: LoginComponent
  },
  {
    path:"adminlist",
    component:AdminlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
