import { Component, OnInit } from '@angular/core';
import { AllCoursesService } from '../services';
import { ActivatedRoute, Route, Router } from '@angular/router';

export interface Course{
  id: number;
  name:string;
  author:string;
  duration:number;
  type:string;
  price:number;
  rating:number;
  image:string;
  description: string
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  constructor(
    private CoursesService: AllCoursesService,
    private routes : Router,
    private route : ActivatedRoute
    ){}
  
  public courses : Course[]

  ngOnInit(): void {
  //  this.courses = this.CoursesService.courses
      // this.CoursesService.getAllCourses().then((data:any)=>{
      //   this.courses = data
      // })
      this.courses=this.route.snapshot.data['courses'];
  }
  goToDetailPage(event: any){
    console.log(event)
    this.routes.navigate(['Courses/Course', event])
  }
}
