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
  imgUrl = ['Webp.net-resizeimage%20(8).png'];
  currentColor ="#336"
  constructor(router:Router) {
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        switch(this.mapping(event.url)){
          case "usps":
            this.currentCompany = "USPS"
            this.currentColor = "#336"
            break;
          case "amazon":
            this.currentCompany = "Amazon"
            this.currentColor = "#fe9d0b"            
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

}
