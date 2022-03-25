import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent implements OnInit {


  arryObj=[
    {
      name:'Samsung',
      price:25000,
      quantity:2
    },
    {
      name:'Motorolla',
      price:30000,
      quantity:1
    },
    {
      name:'OnePlus',
      price:35000,
      quantity:1
    },
    {
      name:'Realme',
      price:20000,
      quantity:3
    }
  ]
  highlight:string='';
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(item){
    console.log('Mouse Over Event Occur.....')
    this.highlight=item.name;
  }

  onMousetOut(){
    console.log(`
    =>>>>>>>>
    Mouse Out Event.....
    `)
    this.highlight='';
  }

}
