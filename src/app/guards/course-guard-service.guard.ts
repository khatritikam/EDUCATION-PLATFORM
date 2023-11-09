import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {  AuthServiceService } from '../services/index'; 

@Injectable()
export class CourseGuardServiceGuard  {
    constructor(
      private authService: AuthServiceService,
      private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean  {
    if(this.authService.isAuthenticated()){
      return true;
    }else{
      this.router.navigate(['']);
      return false
    } 
  }

  canActivateChild(
    childRoute:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ):boolean{
    return this.canActivate(childRoute, state);
  }
  
}
