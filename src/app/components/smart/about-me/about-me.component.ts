import { Component, HostListener } from '@angular/core';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  animations: [
    trigger('scrollAnimation', [
      transition('* => *', [
        query('.fade-in', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(200, [
            animate('4000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class AboutMeComponent {
  
}