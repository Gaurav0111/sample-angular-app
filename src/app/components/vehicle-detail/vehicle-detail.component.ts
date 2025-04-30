import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicle-detail',
  imports: [HeaderComponent,RouterLink, CommonModule,FooterComponent],
  templateUrl: './vehicle-detail.component.html',
  styleUrl: './vehicle-detail.component.scss'
})
export class VehicleDetailComponent {
  vehicle: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.vehicle = navigation?.extras?.state?.['vehicle'];
  }
}
