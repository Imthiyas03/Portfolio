import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {path:'',component:HomeComponent,children:[
    {path:'',component:AboutComponent},
    {path:'resume',component:ResumeComponent},
    {path:'contact',component:ContactComponent},
    {path:'project',component:ProjectComponent},
    {path:'about',component:AboutComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
