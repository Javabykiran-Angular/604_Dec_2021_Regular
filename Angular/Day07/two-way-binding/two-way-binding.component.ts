import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  res:number;
  name:string='';
  name1:string='';
  name2:string='';
  errorBorder:string='2px solid';
  btnName:string='Click';
  constructor() { }

  ngOnInit() {
  }

  onBtnChange(){
    this.btnName='Done';
  }

  onDisplay(){
    if(this.name1=='sumit'){
      this.name2=this.name1;
    }else{
      this.errorBorder='2px solid red';
    }
      
  }

  onKeyUp(){
    console.log("Key up Event Occur...")
  }

  onKeydown(){
    console.log("Key down Event Occur...")
  }

}
