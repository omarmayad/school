import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  Companies = ['Walmart', 'USPS', 'Amazon' , 'Ups' , 'Randstand' , 'Home' , 'Hilton' , 'Fedex' , 'Amazon'];
  constructor() { }

  ngOnInit() {
  }

}
