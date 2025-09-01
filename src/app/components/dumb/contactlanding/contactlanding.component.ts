import { Component } from '@angular/core';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-contactlanding',
  imports: [],
  templateUrl: './contactlanding.component.html',
  styleUrl: './contactlanding.component.scss',
  animations: [
    trigger('scrollAnimation', [
      transition(':enter', [ // <-- triggers when element is inserted
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
export class ContactlandingComponent {

}
