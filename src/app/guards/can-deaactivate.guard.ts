import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactComponent } from '../contact/contact.component';

export interface IDactivateComponent{
  canExit: ()=>  Observable<boolean> |Promise<boolean> | boolean ;
}

export class CanDeaactivateGuard{
  canDeactivate(
    component: IDactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState:RouterStateSnapshot):  boolean | Observable<boolean> | Promise<boolean> 
     {
         return component.canExit();
     }
  
}
