import { Component } from '@angular/core';
import { IDactivateComponent } from '../guards/can-deaactivate.guard'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements IDactivateComponent {

  firstName:any;
  lastName:any;
  country:any;
  subject:any;

  canExit(){
    if(this.firstName || this.lastName || this.country || this.subject){
     return confirm('You have unsaved changes. Do you really want to discard these change?');
    }else{
      return true;
    }

  }

}
