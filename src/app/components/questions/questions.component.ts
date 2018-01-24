import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questionsList:any=["FirstQuestion","SecondQuestion","ThirdQuestion",
  "ForthQuestion","FixfthQuestion","SixthQuestion"];
  index = 0;
  currentQuestion=this.questionsList[this.index];  
  constructor(){}
  ngOnInit() {
  }

  receiveEvent($event){
    console.log($event)
    this.index++;
    this.currentQuestion=this.questionsList[this.index];  
  }

}
