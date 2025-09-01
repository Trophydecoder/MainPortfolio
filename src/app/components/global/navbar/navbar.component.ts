import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private router: Router) {}
  sidebarWidth = 0;


  openLSide() {
    this.sidebarWidth = 60; // adjust the width as needed
  }

  closeLSide() {
    this.sidebarWidth = 0;
  }


  Aboutme(){
    this.router.navigate(['aboutme']);
  }
  Home(){
    this.router.navigate(['myworld']);
  }
  Projects(){
    this.router.navigate(['myprojects']);
  }
  contact(){
    this.router.navigate(['contactme']);
  }
}
