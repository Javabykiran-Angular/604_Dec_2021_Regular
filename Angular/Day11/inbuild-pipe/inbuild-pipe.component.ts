import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

  strDetails:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempora tempore distinctio impedit quia, molestiae molestias laboriosam temporibus aut quas ullam culpa eius at ut, commodi provident repellendus incidunt ipsa.';

  num2:number=456.123789456;
  mydate=new Date();
  constructor() { }

  ngOnInit() {
  }

}
