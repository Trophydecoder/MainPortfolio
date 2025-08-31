import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/global/navbar/navbar.component";
import { AboutMeComponent } from "../../components/smart/about-me/about-me.component";
import { DSAjourneyComponent } from "../../components/smart/dsajourney/dsajourney.component";
import { FooterComponent } from "../../components/global/footer/footer.component";
import { LandingAboutMeComponent } from "../../components/dumb/landing-about-me/landing-about-me.component";
import { OciJourneyComponent } from "../../components/smart/oci-journey/oci-journey.component";

@Component({
  selector: 'app-aboutmepage',
  imports: [NavbarComponent, AboutMeComponent, DSAjourneyComponent, FooterComponent, OciJourneyComponent],
  templateUrl: './aboutmepage.component.html',
  styleUrl: './aboutmepage.component.scss'
})
export class AboutmepageComponent {

}
