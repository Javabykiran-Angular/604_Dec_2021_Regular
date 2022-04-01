import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  CourseArray:string[]=[];
  constructor(private service:CourseService) {

    // let service=new CourseService();
    // this.CourseArray= service.getCourse();

   }

  ngOnInit() {
    this.CourseArray=this.service.getCourse();
  }
  

}
