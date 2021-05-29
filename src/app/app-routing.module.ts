import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "./user-list/user-list.component";
import {ChildComponent} from "./child/child.component";
import {NotfoundComponent} from "./notfound/notfound.component"

const routes: Routes = [
  {
    path:`userlist`,
    component:UserListComponent
  },
  {
    path:`child`,
    component:ChildComponent
  },
  {
    path:`**`,
    component:NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
