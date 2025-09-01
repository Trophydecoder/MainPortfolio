import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/global/navbar/navbar.component";
import { ContactlandingComponent } from "../../components/dumb/contactlanding/contactlanding.component";
import { ContactformComponent } from "../../components/global/contactform/contactform.component";
import { FooterComponent } from "../../components/global/footer/footer.component";

@Component({
  selector: 'app-contact-page',
  imports: [NavbarComponent, ContactlandingComponent, ContactformComponent, FooterComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

}
