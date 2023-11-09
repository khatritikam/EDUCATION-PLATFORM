import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/services.team';

export interface team{
  id:number;
  name:string;
  job:string;
  email:string;
  image:string;
  description: string
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  constructor(private teamService: TeamService){}

  public teams : team[]

  
  ngOnInit(): void {
    this.teams = this.teamService.teams
  }

}
