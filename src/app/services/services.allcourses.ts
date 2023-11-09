import { Injectable } from "@angular/core";

@Injectable()
export class AllCoursesService{
    courses = [
        {
          id: 101, name: 'JavaScript for beginners', author: 'John Heikela', duration: 48, type: 'Free',
          price: 0.00, rating: 3.5, image: 'assets/java-script.jpg',
          description: 'In this course you will learn the fundamentals of JavaScript.This course is purely designed for beginners'
        },
        {
          id: 102, name: 'Angular for beginners', author: 'Mark Vought', duration: 28, type: 'Premium',
          price: 129.00, rating: 4.5, image: 'assets/angular.jpg',
          description: 'In this course you will learn the fundamentals of Angular framework.This course is purely designed for beginners'
        },
        {
          id: 103, name: 'React for beginners', author: 'Steve Smith', duration: 18.5, type: 'Free',
          price: 0.00, rating: 4.0, image: 'assets/react.jpg',
          description: 'In this course you will learn the fundamentals of React.This course is purely designed for beginners'
        },
        {
          id: 104, name: 'Advance Angular course', author: 'Steve Smith', duration: 19.5, type: 'Premium',
          price: 145.50, rating: 4.8, image: 'assets/angular-ad.png',
          description: 'In this course you will learn all the concepts of Angular from basic to advance.This course is purely designed for beginners'
        },
        {
          id: 105, name: 'Advance JavaScript course', author: 'John Heikela', duration: 60, type: 'Premium',
          price: 150.00, rating: 4.5, image: 'assets/java-ad.jpg',
          description: 'In this course you will learn the comlete modern JavaScript step by step .This course is purely designed for beginners'
        },
        {
          id: 106, name: 'Angular with .NET Core', author: 'Mark Vought', duration: 68, type: 'Premium',
          price: 129.00, rating: 4.5, image: 'assets/angular-net.png',
          description: 'In this course you will learn the fundamentals of Angular framework with .NET Core.This course is purely designed for beginners'
        },
        {
          id: 107, name: 'Advance React Course', author: 'Merry Smith', duration: 18.5, type: 'Free',
          price: 0.00, rating: 4.0, image: 'assets/react-ad.png',
          description: 'In this course you will learn the fundamentals and advance concepts of React.This course is purely designed for beginners'
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
      ];

      getAllCourses(): any{
        const courseList = new Promise((resolve, reject) =>{
          setTimeout(()=>{
            resolve(this.courses)
          }, 5000)
        })
        return courseList
      }
}