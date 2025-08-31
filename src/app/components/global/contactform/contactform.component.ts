import { Component, HostListener } from '@angular/core';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-contactform',
  imports: [],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
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
export class ContactformComponent {

}
