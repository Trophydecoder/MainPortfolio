import { Component, HostListener } from '@angular/core';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-dsajourney',
  imports: [],
  templateUrl: './dsajourney.component.html',
  styleUrl: './dsajourney.component.scss',
  animations: [
    trigger('scrollAnimation', [
      transition('* => *', [
        // Fade-in upward animation for text
        query('.fade-in', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(200, [
            animate('8000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true }),
  
        // Slide-in from right for image
        query('.image-slide', [
          style({ opacity: 0, transform: 'translateX(50px)' }),
          animate('10000ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
        ], { optional: true })
      ])
    ])
  ]
})
export class DSAjourneyComponent {

}
