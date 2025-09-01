import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MyWorldPageComponent } from './pages/my-world-page/my-world-page.component';
import { AboutmepageComponent } from './pages/aboutmepage/aboutmepage.component';
import { ProjectspageComponent } from './pages/projectspage/projectspage.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const routes: Routes = [
    {path: '' , title : 'home' , component: HomepageComponent},
    {path: 'myworld' , title : 'myworld' , component: MyWorldPageComponent},
    {path: 'aboutme' , title : 'aboutme' , component: AboutmepageComponent},
    {path: 'myprojects' , title : 'myprojects' , component: ProjectspageComponent},
    {path: 'contactme' , title : 'contactme' , component: ContactPageComponent},
];
