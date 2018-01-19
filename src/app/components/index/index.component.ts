import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  Companies = ['Walmart', 'USPS', 'Amazon' , 'Ups' , 'Randstand' , 'Home' , 'Hilton' , 'Fedex' , 'Amazon'];
imgUrl = ['Webp.net-resizeimage%20(8).png'];

  constructor(router:Router) {
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd)
        console.log("event",event);
        
    });
  }

  ngOnInit() {
  }

}
