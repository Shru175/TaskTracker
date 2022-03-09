import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../Task';
import { FormBuilder, FormGroup,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {
  deleteform: FormGroup;
  inTask:Task;
  chkFlag:boolean=false;



  constructor(private formBuilder: FormBuilder, private service:TaskService,private router:Router) { }
  dispData: Task[];
  item:Task;
  inputData:{ tid: number, tname: string, tdesc: string }[];
  
  ngOnInit(): void {
    this.deleteform= this.formBuilder.group({
      chkTid :''
    })




    
    this.inputData = this.service.getData();
  
    for(var j=0 ; j <=this.inputData.length ; j++ )
{
  

  this.item=this.service.getData()[j];
  
}
  }
 
  onDelete(taskId:number){

this.chkFlag=true;
  // alert("Delete selected"+taskId)
    
    for (var k=0;k<this.inputData.length;k++)
    {
        var temp = this.inputData[k].tid;
        
        if(this.inputData[k].tid===taskId)
        {
           var index=k;

          // alert("index:"+index);
           this.inputData.splice(index,1);
           
        }
        
       
    }

    
    //return arrProds;
    

  }

}
