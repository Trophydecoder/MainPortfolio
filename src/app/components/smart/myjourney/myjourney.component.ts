import { Component, HostListener } from '@angular/core';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-myjourney',
  imports: [],
  templateUrl: './myjourney.component.html',
  styleUrl: './myjourney.component.scss',
  animations: [
    trigger('scrollAnimation', [
      transition(':enter', [
        query('.box', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(200, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ])
  ]
})
export class MyjourneyComponent {}
