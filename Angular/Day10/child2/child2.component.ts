import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

    @Output()  childStrEvent=new EventEmitter();

     @Output()  ChildJsonEvent=new EventEmitter();

    ChildStrData:string='Enjoying Angular 8 with Sumit';

    myjson={
      id:8,
      product:'motorola',
      price:30000
    }

  constructor() { }

  ngOnInit() {
  }

  onSendData(){
      this.childStrEvent.emit(this.ChildStrData);
      this.ChildJsonEvent.emit(this.myjson);
  }

}
