import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  ProductDEC:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis odio eligendi facilis? Alias molestiae cumque laborum porro voluptatem consequatur similique accusamus distinctio sed. Labore quo ullam maxime aliquam velit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis odio eligendi facilis? Alias molestiae cumque laborum porro voluptatem consequatur similique accusamus distinctio sed. Labore quo ullam maxime aliquam velit.';
  constructor() { }

  ngOnInit() {
  }

}
