import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding1',
  templateUrl: './event-binding1.component.html',
  styleUrls: ['./event-binding1.component.css']
})
export class EventBinding1Component implements OnInit {

  myflag:boolean=true;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    if(this.myflag){
      console.log("Click Event is Occur...")
      this.myflag=false;
    }
   
  }

  onImageClick(){
    console.log('on Image Click Occur..')
  }

  onDollerEvent(myevent){
    console.log(myevent)

    console.log(`Data is .. ${myevent.target.value}`)

  }

}
