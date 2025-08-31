import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/global/navbar/navbar.component";
import { LandingProjectComponent } from "../../components/smart/landing-project/landing-project.component";
import { ProjectsComponent } from "../../components/smart/projects/projects.component";
import { FooterComponent } from "../../components/global/footer/footer.component";

@Component({
  selector: 'app-projectspage',
  imports: [NavbarComponent, LandingProjectComponent, ProjectsComponent, FooterComponent],
  templateUrl: './projectspage.component.html',
  styleUrl: './projectspage.component.scss'
})
export class ProjectspageComponent {

}
