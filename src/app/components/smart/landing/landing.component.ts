import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    const url = 'https://drive.google.com/file/d/1KlTvYO37fHWbdzW2SQafomqY-DXtRaMP/view?usp=drive_link'; 
    window.open(url, '_blank'); 
  }
}
