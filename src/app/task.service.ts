import { Injectable } from '@angular/core';
import { Task } from './Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  //taskArr: Task[];
  taskArr: { tid: number, tname: string, tdesc: string }[] = [
    { "tid": 1, "tname": "Submit Project", "tdesc": "Project Submission by EOD" },
    { "tid": 2, "tname": "MOM", "tdesc": "Minutes of meeting submission" }
    ];
  //tempTask:Task=new Task(1,"first item","first Desc");
  //tempTask2:Task= new Task(2,"second item","second Desc");

   
getData():{tid: number, tname: string, tdesc: string}[]
{
  alert("getting data"+this.taskArr);
return this.taskArr;
}
insertTask(inTask:Task)
{

  this.taskArr.push(inTask);
}

setData(indTask: Task)
{
  //alert("now the array has been set with values"+indTask.tid+"name"+indTask.tname);
    //tempTask= 
  //  this.taskArr.push(this.tempTask); 
    //this.taskArr.push(this.tempTask2); 
    this.taskArr.push(indTask);
  
//this.taskArr.push(indTask); 
}
}
