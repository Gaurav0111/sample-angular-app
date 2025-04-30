import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss'
})
export class HeaderSectionComponent {
  registrationNumber: string = '';

  constructor(private router: Router) { }

  registrationSubmit() {
    console.log("number: ", this.registrationNumber);
    this.router.navigate(['/register-vehicle'], {
      state: { Number: this.registrationNumber }
    });
  }

}
