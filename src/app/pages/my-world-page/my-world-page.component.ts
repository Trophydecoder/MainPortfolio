import { Component } from '@angular/core';
import { LandingComponent } from "../../components/smart/landing/landing.component";
import { NavbarComponent } from "../../components/global/navbar/navbar.component";
import { MyjourneyComponent } from "../../components/smart/myjourney/myjourney.component";

@Component({
  selector: 'app-my-world-page',
  imports: [LandingComponent, NavbarComponent, MyjourneyComponent],
  templateUrl: './my-world-page.component.html',
  styleUrl: './my-world-page.component.scss'
})
export class MyWorldPageComponent {

}
