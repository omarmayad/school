import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-continue',
  templateUrl: './continue.component.html',
  styleUrls: ['./continue.component.css']
})
export class ContinueComponent implements OnInit {
  Companies = ['Walmart', 'USPS', 'Amazon' , 'Ups' , 'Randstand' , 'Home' , 'Hilton' , 'Fedex' , 'Amazon'];
  constructor() { }

  ngOnInit() {
  }

}
