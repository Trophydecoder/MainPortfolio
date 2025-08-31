import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  animations: [
    trigger('typingAnimation', [
      transition(':enter', [
        query('.word', [style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(800, [animate('800ms ease-out',style({ opacity: 1, transform: 'translateY(0)' }))
          ])])])])
        ]
})
export class LandingComponent {

  downloadCV() {
    const link = document.createElement('a');
    link.href ='assets/CV.pdf';
    link.download = 'Sithembiso Mdawe_CV.pdf';
    link.click();
  }
}
