import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-entering-dev-world',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entering-dev-world.component.html',
  styleUrls: ['./entering-dev-world.component.scss'],
  animations: [
    trigger('typingAnimation', [
      transition(':enter', [query('.word', [style({ opacity: 0 }),stagger(500, [
        animate('6000ms ease-in', style({ opacity: 1 }))])], { optional: true })])
    ])
  ]
})
export class EnteringDevWorldComponent {
  words0 = '/assets/LeaderWorld.png'
  words1 = 'You Found Me'.split(' ');
  words2 = 'This world was not meant to be discovered'.split(' ');
  words3 = 'Do you dare to enter ?'.split(' ');

  enterWorld() {
    alert('Welcome to your world!');
  }
}
