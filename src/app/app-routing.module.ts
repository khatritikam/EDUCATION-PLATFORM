import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './shared';
import { CourseGuardServiceGuard } from './guards/course-guard-service.guard'
import { CanDeaactivateGuard } from './guards/can-deaactivate.guard'
import { CourseResolveServiceGuard } from './guards/course-resolve-service.guard'

const routes: Routes = [
  {path:'', component:HomeComponent},
  //{path:'', redirectTo:'Home', pathMatch:'full'},
  {path:'Home', component:HomeComponent},
  {path:'About', component:AboutComponent},
  {path:'Contact', canDeactivate:[CanDeaactivateGuard], component:ContactComponent},
  {path:'Courses', component:CoursesComponent, resolve: {courses:CourseResolveServiceGuard}},
  // {
  //   path: 'Courses/Course/:id',
  //   component: ProductDetailsComponent
  // },
  {path:'Courses', canActivateChild:[CourseGuardServiceGuard], children:[
    {path:'Course/:id', component:ProductDetailsComponent}
  ]},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
