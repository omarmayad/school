import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questionsList:any=["FirstQuestion","SecondQuestion","ThirdQuestion",
  "ForthQuestion","FifthQuestion","SixthQuestion"];
  index = 0;
  currentQuestion=this.questionsList[this.index]; 
  AllTheSelectedOptions=[] ;
  constructor(){}
  ngOnInit() {
  }

  receiveEvent($event){
    console.log($event)
    this.index++;
    this.currentQuestion=this.questionsList[this.index];

    if(this.currentQuestion.indexOf(this.AllTheSelectedOptions)<0){
      this.currentQuestion.push(this.AllTheSelectedOptions);
    }
    else{
      this.currentQuestion.splice(this.currentQuestion.indexOf(this.AllTheSelectedOptions),1);
    }
    
  }

}
