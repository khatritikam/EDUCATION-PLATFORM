import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/services';
import{AllCoursesService} from 'src/app/services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
   
  // @Input()
  // course: {
  //   id: number;
  //  name:string;
  //  author:string;
  //  duration:number;
  //  type:string;
  //  price:number;
  //  rating:number;
  //  image:string;
  //  description: string
  // }

  course:any;
  courseId:any;
  RouteParmObs:any;
  editmode: boolean = false;

  constructor(
      private activetedRoute:ActivatedRoute,
      private service:AllCoursesService,
      private router: Router ) {}

  ngOnInit(): void {
    // this.courseId = this.activetedRoute.snapshot.paramMap.get('id')
    // console.log(this.courseId)
    // this.course = this.service.courses.find(x => x.id == this.courseId)

    this.RouteParmObs = this.activetedRoute.paramMap.subscribe((param)=>{
      this.courseId =param.get('id');
      this.course = this.service.courses.find(x => x.id == this.courseId);
    });
    // sanpshot
    //this.editmode = Boolean(this.activetedRoute.snapshot.queryParamMap.get('edit'));
     this.activetedRoute.queryParamMap.subscribe((param)=>{
      this.editmode= Boolean(param.get('edit'))
    })

  }   

    appendQueryParam(){
      this.router.navigate(['/Courses/Course', this.courseId], {queryParams:{edit: true}}) 
      }
  }
