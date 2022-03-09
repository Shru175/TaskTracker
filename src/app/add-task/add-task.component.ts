import { Component, OnInit } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from '../Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  addForm: FormGroup;
  inTask:Task;
 // Task:{ tid: number, tname: string, tdesc: string };
  //inputData:{ tid: number, tname: string, tdesc: string }[];
  
  constructor(private formBuilder: FormBuilder, private Itservice:TaskService,private router:Router) { }

  ngOnInit(): void {
    this.addForm= this.formBuilder.group({
      itemid:'',
      itemname:'',
      itemdesc:''})
  }

  onSubmit(){
    
    this.inTask=new Task(this.addForm.get("itemid")?.value,this.addForm.get("itemname")?.value,this.addForm.get("itemdesc")?.value);
    //this.inTask.tdesc=
    
    this.Itservice.setData(this.inTask);
   // this.router.navigateByUrl('/show');
    //alert("set done");
    this.router.navigateByUrl('/show');
 
  }

}
