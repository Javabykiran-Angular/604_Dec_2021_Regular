import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {

  res:number=0;
  constructor() { }

  ngOnInit() {
  }

  onSend(myname){
    // console.log(myname)
    console.log('Data is ===>>> '+myname.value)

    myname.style.background='green';
    myname.style.color='white';


  }
  onSend1(myvalue){
    console.log("Value is => "+myvalue)
  }

  onAddition(num1,num2){
      
    let n1=+num1;
    let n2=+num2;

      // this.res=num1+num2;
      this.res=n1+n2;
  }

  onChange(myname){
    console.log("Change Event Occur...")

    console.log("Text Length is=>  "+myname.value.length);
    
  

  }

}
