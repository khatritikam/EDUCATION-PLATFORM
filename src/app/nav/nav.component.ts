import { Component } from '@angular/core';
import {  AuthServiceService } from '../services/index'; 

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(
    private authService: AuthServiceService){}

  login(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }
}
