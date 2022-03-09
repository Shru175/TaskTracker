import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private service:TaskService,private router:Router) { }
  dispData: Task[];
  item:Task;
  chkFlag:boolean=false;
  tempTid: number=0;

  inputData:{ tid: number, tname: string, tdesc: string }[];
  
  ngOnInit(): void {
 
      

      
    this.inputData = this.service.getData();
  
   /* for(var j=0 ; j <=this.inputData.length ; j++ )
{
  

  this.item =this.service.getData()[j];
  }*/
}


  onUpdate(taskId:number,taskDesc:string,taskName:string){
    this.updateForm= this.formBuilder.group({
      itemId:'',
      itemName:'',
      itemDesc:''})
   this.chkFlag=true;
   this.tempTid=taskId;

       //alert("Update selected"+this.tempTid)
        

        for (var k=0;k<this.inputData.length;k++)
        {
            var temp = this.inputData[k].tid;
            
            if(this.inputData[k].tid===taskId)
            {
               var index=k;
    
              // alert("index:"+index);
              // this.inputData.splice(index,1);
              this.inputData[k].tdesc=taskDesc;
              this.inputData[k].tid=taskId;
              this.inputData[k].tname=taskName;
    
               
            }
            
           
        }
    
        
        //return arrProds;
        
    
      }
    
}
