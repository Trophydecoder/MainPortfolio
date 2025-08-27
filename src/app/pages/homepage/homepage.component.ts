import { Component } from '@angular/core';
import { EnteringDevWorldComponent } from "../../components/openingComponents/entering-dev-world/entering-dev-world.component";

@Component({
  selector: 'app-homepage',
  imports: [EnteringDevWorldComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
