import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showLoginPopup = false;
  showCallPopup = false;
  cities = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Surat'];
  showProfile() {
    this.showLoginPopup =!this.showLoginPopup;
    this.showCallPopup = false;
  }
  showCall() {
    this.showLoginPopup =false;
    this.showCallPopup = !this.showCallPopup;
  }
}
