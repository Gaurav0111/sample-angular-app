import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;
  registrationNumber?: ''
  showLoginPopup = false;
  showCallPopup = false;
  allCities: any[] | undefined
  Cities = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Surat'];
  stateNames: any[] | undefined;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
    this.http.get<any[]>('https://raw.githubusercontent.com/Gaurav0111/sample-angular-app/main/src/assets/cities.json')
      .subscribe({
        next: data => {
          this.allCities = data.filter(city => city.country_code === 'IN');
          this.stateNames = [...new Set(this.allCities.map(city => city.state_name))].sort()
            // .slice(0, 15)
            ;
        },
        error: err => {
          console.error('Error fetching cities:', err);
        }
      });
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = offset > 100; // Change '100' to whatever scroll distance you prefer
  }

  showProfile() {
    this.showLoginPopup = !this.showLoginPopup;
    this.showCallPopup = false;
  }
  showCall() {
    this.showLoginPopup = false;
    this.showCallPopup = !this.showCallPopup;
  }
  registrationSubmit() {
    console.log("number: ", this.registrationNumber);
    this.router.navigate(['/register-vehicle'], {
      state: { Number: this.registrationNumber }
    });
  }

}
