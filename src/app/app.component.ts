import { Component } from '@angular/core';
import { CoursesService, TeamService } from './services/index';
import {  } from './services/services.team';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularroutiing';
 
  constructor(private courseService: CoursesService, teamService:TeamService){}
  
}
