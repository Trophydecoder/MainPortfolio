import { Component } from '@angular/core';
import { EnteringDevWorldComponent } from "../../openingComponents/entering-dev-world/entering-dev-world.component";

@Component({
  selector: 'app-landing',
  imports: [EnteringDevWorldComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
