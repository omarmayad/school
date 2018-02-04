import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  nextInput(){
    var phone = (<HTMLInputElement>document.getElementById('phone')).value;
    this.newMethod(phone);

}

  private newMethod(phone: string) {
    if(phone.length >= 9 ){
      this.messageEvent.emit({PhoneNumber:phone});
    }
    else{
      alert("Please enter a phone number");
    }
  }
}
