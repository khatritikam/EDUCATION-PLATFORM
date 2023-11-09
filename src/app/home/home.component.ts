import { Component, OnInit } from '@angular/core';
import{CoursesService } from '../services/services.courses'
import { Route, Router } from '@angular/router';

export interface course{
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private courseService: CoursesService,
    private routes : Router
    ){} 
  
  public courses : course[]
 
  ngOnInit(): void {
    this.courses =this.courseService.courses
  }

  goToDetailPage(event: any){
    console.log(event)
    this.routes.navigate(['Courses/Course', event])
  }
}
