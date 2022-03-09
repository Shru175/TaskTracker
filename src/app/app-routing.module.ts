import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"",component:ShowTaskComponent},
  {path:"show",component:ShowTaskComponent},
  {path:"add",component:AddTaskComponent},
  {path:"delete",component:DeleteTaskComponent},
 {path:"update",component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
