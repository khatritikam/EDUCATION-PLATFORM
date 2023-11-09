import { Injectable } from "@angular/core";

@Injectable()
export class CoursesService{
    courses = [
        
          {
            id: 104, name: 'Advance Angular course', author: 'Steve Smith', duration: 19.5, type: 'Premium',
            price: 145.50, rating: 4.8, image: 'assets/angular-ad.png',
            description: 'In this course you will learn all the concepts of Angular from basic to advance.This course is purely designed for beginners'
          },                
          {
            id: 108, name: 'UX Design course', author: 'Steve Smith', duration: 19.0, type: 'Premium',
            price: 115.50, rating: 4.8, image: 'assets/ux.png',
            description: 'In this course you will learn about reactive web development using HTML & CSS.This course is purely designed for beginners'
          },
          {
            id: 109, name: 'UX Design course: Advance', author: 'Steve smith', duration: 20.0, type: 'Premium',
            price: 115.50, rating: 4.8, image: 'assets/ux-ad.jpg',
            description: 'In this course you will learn about reactive web development using HTML & CSS.This course is purely designed for beginners'
          }
    ]
}