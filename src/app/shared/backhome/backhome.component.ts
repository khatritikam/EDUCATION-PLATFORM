import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-backhome',
  templateUrl: './backhome.component.html',
  styleUrls: ['./backhome.component.scss']
})
export class BackhomeComponent {
  constructor(private route: Router){}

  navigationHome(){
    // this.route.navigate(['Home'])
    this.route.navigateByUrl('Home')
  }
}
