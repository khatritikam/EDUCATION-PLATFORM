import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Output()
  cardDetailId =  new EventEmitter<any>() 
  
  @Input()
  course: {
    id: number;
   name:string;
   author:string;
   duration:number;
   type:string;
   price:number;
   rating:number;
   image:string;
   description: string
  }

  showDetail(courseId: any){
      this.cardDetailId.emit(courseId)
  }

}
