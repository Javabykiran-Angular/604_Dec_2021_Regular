import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strdata:string='Data from Parent...';

  myjson={
    id:9,
    fname:'Sumit',
    status:'Active'
  }

  StrdataFromChild:string='';

  jsonDataFromChild={};

  constructor() { }

  ngOnInit() {
  }

}
