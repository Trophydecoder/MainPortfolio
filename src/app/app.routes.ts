import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MyWorldPageComponent } from './pages/my-world-page/my-world-page.component';

export const routes: Routes = [
    {path: '' , title : 'home' , component: HomepageComponent},
    {path: 'myworld' , title : 'myworld' , component: MyWorldPageComponent},
];
