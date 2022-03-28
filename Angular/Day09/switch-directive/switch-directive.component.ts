import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-directive',
  templateUrl: './switch-directive.component.html',
  styleUrls: ['./switch-directive.component.css']
})
export class SwitchDirectiveComponent implements OnInit {

    choice:string='';

  constructor() { }

  ngOnInit() {
  }

  onSend(colorname:string){
      this.choice=colorname.trim().toLowerCase();
  }

}
