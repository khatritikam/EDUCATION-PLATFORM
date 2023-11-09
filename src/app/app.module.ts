import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CoursesService , TeamService,AllCoursesService,AuthServiceService} from './services/index';
import { AboutComponent } from './about/about.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { TeamCardComponent } from './shared/team-card/team-card.component';
import { BackhomeComponent } from './shared/backhome/backhome.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ProductDetailsComponent } from './shared/product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { CourseGuardServiceGuard } from './guards/course-guard-service.guard'
import { CanDeaactivateGuard } from './guards/can-deaactivate.guard'
import { CourseResolveServiceGuard } from './guards/course-resolve-service.guard';
import { SpinnerComponent } from './spinner/spinner.component'

// const appRoute:Routes = [
//   {path:'', component:HomeComponent},
//   //{path:'', redirectTo:'Home', pathMatch:'full'},
//   {path:'Home', component:HomeComponent},
//   {path:'About', component:AboutComponent},
//   {path:'Contact', component:ContactComponent},
//   {path:'Courses', component:CoursesComponent},
//   {path:'**', component:ErrorComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ProductCardComponent,
    TeamCardComponent,
    BackhomeComponent,
    ContactComponent,
    CoursesComponent,
    ErrorComponent,
    ProductDetailsComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // RouterModule.forRoot(appRoute)
  ],
  providers: [CoursesService, TeamService, AllCoursesService,AuthServiceService, CourseGuardServiceGuard,CanDeaactivateGuard,
  CourseResolveServiceGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
