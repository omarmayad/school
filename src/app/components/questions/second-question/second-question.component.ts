import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-second-question',
  templateUrl: './second-question.component.html',
  styleUrls: ['./second-question.component.css']
})
export class SecondQuestionComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }
  Options=[];
  ngOnInit() {
  }
  nextQuestion(){
    this.messageEvent.emit({question:"SecondQuestion",selected:this.Options});
  }
  addOption(selected){
    if(this.Options.indexOf(selected)<0){
      this.Options.push(selected);
    }
    else{
      this.Options.splice(this.Options.indexOf(selected),1);
    }
    console.log(this.Options);

  }

}
