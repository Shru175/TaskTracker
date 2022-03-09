import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {

  constructor(private service:TaskService) { }
dispData: Task[];
item:Task;
inputData:{ tid: number, tname: string, tdesc: string }[];

  ngOnInit(): void {
    //this.dispData= this.service.getData();
   //alert("In show");
   this.inputData = this.service.getData();
  
    for(var j=0 ; j <=this.inputData.length ; j++ )
{
  //alert("So the desc"+this.inputData[j].tdesc);

  this.item=this.service.getData()[j];
  
}
  }

}
