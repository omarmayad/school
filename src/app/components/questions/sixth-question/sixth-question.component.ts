import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-sixth-question',
  templateUrl: './sixth-question.component.html',
  styleUrls: ['./sixth-question.component.css']
})
export class SixthQuestionComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  nextQuestion(selected){
    this.messageEvent.emit({question:"SixthQuestion",selected:selected});
  }

}
