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
  percentage=16.66666666666667;
  constructor(){}
  ngOnInit() {
  }

  receiveEvent($event){
    this.index++;
    this.percentage += 100/this.questionsList.length
    this.currentQuestion=this.questionsList[this.index];
    console.log(this.percentage)
    this.AllTheSelectedOptions.push($event);
    if(this.index == 5){
      //go to final page
      localStorage.setItem('options', JSON.stringify(this.AllTheSelectedOptions));
    }
  }

}
