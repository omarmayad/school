import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-continue',
  templateUrl: './continue.component.html',
  styleUrls: ['./continue.component.css']
})
export class ContinueComponent implements OnInit {
  currentColor="";
  constructor(){
    this.currentColor= localStorage.getItem('Color');
  }
  ngOnInit() {
  }

}
