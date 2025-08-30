import { Component } from '@angular/core';
import { LandingComponent } from "../../components/smart/landing/landing.component";
import { NavbarComponent } from "../../components/global/navbar/navbar.component";
import { MyjourneyComponent } from "../../components/smart/myjourney/myjourney.component";
import { AboutMeComponent } from "../../components/smart/about-me/about-me.component";
import { ProjectsComponent } from "../../components/smart/projects/projects.component";

@Component({
  selector: 'app-my-world-page',
  imports: [LandingComponent, NavbarComponent, MyjourneyComponent, AboutMeComponent, ProjectsComponent],
  templateUrl: './my-world-page.component.html',
  styleUrl: './my-world-page.component.scss'
})
export class MyWorldPageComponent {

}
