import { FirstQuestionComponent } from './../questions/first-question/first-question.component';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  currentCompany:any = "";
  imgUrl = "";
  currentColor ="#303066";
  constructor(private router :Router) {
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        switch(this.mapping(event.url)){
          case "usps":
            this.currentCompany = "USPS"
            this.currentColor = "#303066"
            this.imgUrl = "USPS.png"
            break;

          case "amazon":
            this.currentCompany = "Amazon"
            this.currentColor = "#fe9d0b"
            this.imgUrl = "Amazon.png"            
            break;

            case "fedex":
            this.currentCompany = "Fedex"
            this.currentColor = "#FF9A00" 
            this.imgUrl = "Fedex.png"           
            break;

            case "hilton":
            this.currentCompany = "Hilton"
            this.currentColor = "#00355E" 
            this.imgUrl = "Hilton.png"

            break;
            case "home":
            this.currentCompany = "Homedepot"
            this.currentColor = "#F96300" 
            this.imgUrl = "Home.png"           
            break;

            case "randstad":
            this.currentCompany = "Randstad"
            this.currentColor = "#1B76DA"            
            break;

            case "ups":
            this.currentCompany = "Ups"
            this.currentColor = "#FFB600" 
            this.imgUrl = "Ups.png"           
            break;

            case "walmart":
            this.currentCompany = "Walmart"
            this.currentColor = "#057CB3" 
            this.imgUrl = "Walmart.png"           
            break;
  
            
            
        }
      }
    });
  }

  mapping(name){
    return name.slice(1,name.length);
  }

  ngOnInit() {
  }
goToQuestions(){
  localStorage.setItem('Color',this.currentColor);
  this.router.navigateByUrl('/questions');
  
}
}
