import { Injectable } from '@angular/core';

export class AuthServiceService {

  constructor() {}

  logggedIn:boolean = false;

  login(){
    this.logggedIn = true;
  }

  logout(){
    this.logggedIn = false;
  }

  isAuthenticated(){
    return this.logggedIn;
  }
}
