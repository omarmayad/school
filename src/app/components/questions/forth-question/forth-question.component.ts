import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-forth-question',
  templateUrl: './forth-question.component.html',
  styleUrls: ['./forth-question.component.css']
})
export class ForthQuestionComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  nextQuestion(selected){
    this.messageEvent.emit({question:"ForthQuestion",selected:selected});
  }
}
