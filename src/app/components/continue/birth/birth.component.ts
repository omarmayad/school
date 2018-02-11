import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { empty } from 'rxjs/Observer';

@Component({
  selector: 'app-birth',
  templateUrl: './birth.component.html',
  styleUrls: ['./birth.component.css']
})
export class BirthComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<any>();
  Options=[];
  months=["Month"];
  years=["Year"];
  days=["Day"];
  constructor() { }

  ngOnInit() {
  }
  
  
  nextInput(){
    if( this.Options.length > 2){
      this.messageEvent.emit({Input:"DateOfBirth",selectedDate:this.Options});
    }
    else{
      
      alert("You must enter a date");
    }
   
  }
  addOption(selected){
    if(this.Options.indexOf(selected)<0){
      this.Options.push(selected);
      this.months = this.Options[0];
      this.days = this.Options[1];
      this.years = this.Options[2];
    }
    else{
      this.Options.splice(this.Options.indexOf(selected),1);
      
    }
    

  }

 /* private addOption(month,day,year) {
    if(month.length && day.length && year.length>1){
    this.messageEvent.emit({ selectedMonth: month , selectedDay : day ,selectedYear: year  });
    }
    else{
      alert("Please enter a date");
    }
  }*/
}
