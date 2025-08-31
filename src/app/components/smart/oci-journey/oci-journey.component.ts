import { Component, HostListener } from '@angular/core';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-oci-journey',
  imports: [],
  templateUrl: './oci-journey.component.html',
  styleUrl: './oci-journey.component.scss',
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

      ])  
    ])
  ]
})
export class OciJourneyComponent {

}
