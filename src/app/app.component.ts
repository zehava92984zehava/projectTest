 import { Component } from '@angular/core';
import {  Details } from './details';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ServiceService } from '../app/service.service';
import {MatFormFieldModule} from '@angular/material/form-field'
import { elementAt } from 'rxjs/operators';

 @Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
 })

 export class AppComponent {
   constructor(private ser:ServiceService){}
    title = 'testt';
    details = new Details('','','','');
    submitted = false;
    last_numer:number;
    one_two:number;
    help:number;
    parsedJson:any;
    sum:number=0;
    element:any;
    ok:boolean;
    
   onSubmit(){
    this.submitted = true;
    this.ser.send(this.details).subscribe((succ) => {

    if (succ['status']="success")
      {
        alert(succ['status']) 
         let sum:number=0;

         var list= succ['hbJson']["בריאות ותאונות אישיות"]
         var list2= succ['hbJson']["חיים ואובדן כושר עבודה"]
         
         list.forEach(element => {
         this.sum+=parseFloat( element.premia)
        });
         list2.forEach(element => {
         this.sum+=parseFloat( element.premia)
         });
         
          if (sum>50)
             this.ser.nore_than_fifty(this.details).subscribe
             (
               (succ) => {alert("success more than 50")},
               (err) => {alert("error more than 50")}
             )
         else this.ser.less_than_fifty(this.details).subscribe
         (
           (succ) => {alert("success less than 50")},
           (err) => {alert("error less than 50")}
         )
     }
    else alert (succ['ermsg'])
   }, 
      (err) => {
       alert("error");
     })
 }
  
   checkId()
   {
      debugger
      let last_number=this.details.id.slice(8,9);
      let the_number:number=parseInt(this.details.id);
      let help=0;
      let one_two=2;
      let sum=0;
      let i=8;
      let last_number2=0;
       while(the_number)
     {
       help=parseInt(the_number.toString().slice(i-1,i))
       sum += help*one_two>10?help*one_two-9:help*one_two;
       if(one_two==1)
       one_two=2;
       else one_two=1;
       i--;
       the_number=parseInt(the_number.toString().slice(0,i))
     }
       last_number2=10-parseInt(sum.toString().slice(1,2))
      if (last_number2!=parseInt(last_number))
        alert("the id is not valid")
      else{
       let sum_help=sum +parseInt(last_number);
       if(parseInt(sum_help.toString().slice(1,2))==0)
       {
         this.ok=true;
         this.onSubmit()
        }
      else alert("the id is not valid")
    }

   }

  }



