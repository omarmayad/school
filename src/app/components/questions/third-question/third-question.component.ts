import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-third-question',
  templateUrl: './third-question.component.html',
  styleUrls: ['./third-question.component.css']
})
export class ThirdQuestionComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    
  }
  nextQuestion(selected){
    this.messageEvent.emit({question:"ThirdQuestion",selected:selected});
  }
}
