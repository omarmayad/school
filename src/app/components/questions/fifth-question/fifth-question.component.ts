import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-fifth-question',
  templateUrl: './fifth-question.component.html',
  styleUrls: ['./fifth-question.component.css']
})
export class FifthQuestionComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  nextQuestion(selected){
    this.messageEvent.emit({question:"FifthQuestion",selected:selected});
  }
}
