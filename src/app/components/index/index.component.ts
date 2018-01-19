import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
Companys = ['Walmart', 'USPS', 'Amazon' , 'Ups' , 'Randstand' , 'Home' , 'Hilton' , 'Fedex' , 'Amazon'];

  constructor(router:Router) {
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd)
        
    });
  }

  ngOnInit() {
  }

}
