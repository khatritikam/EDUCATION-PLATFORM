import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AllCoursesService } from '../services';

@Injectable()
export class CourseResolveServiceGuard{
      constructor(
        private coursesService: AllCoursesService
      ){}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    return this.coursesService.getAllCourses().then((data:any)=>{
      return data;
    })
      
  }
  
}
