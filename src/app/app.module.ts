import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { TaskService } from './task.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowTaskComponent,
    AddTaskComponent,
    DeleteTaskComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
