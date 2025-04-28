import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-automobile',
  imports: [CommonModule, RouterLink],
  templateUrl: './automobile.component.html',
  styleUrl: './automobile.component.scss'
})
export class AutomobileComponent {
  automobileItems = [
    { name: 'Car', img: 'assets/images/car-image-removebg-preview.png', link: '#' },
    { name: 'Bike', img: 'assets/images/bike-image-removebg-preview.png', link: '#' },
    { name: 'Scooter', img: 'assets/images/scooter-image-removebg-preview.png', link: '#' },
    { name: 'EV', img: 'assets/images/EV-image-removebg-preview.png', link: '#' },
    { name: 'Bicycle', img: 'assets/images/bicycle-image-removebg-preview.png', link: '#' },
    { name: 'Taxi', img: 'assets/images/taxi-image-removebg-preview.png', link: '#' },
    { name: 'Bus', img: 'assets/images/bus-image-removebg-preview.png', link: '#' },
    { name: 'Truck', img: 'assets/images/truck-removebg-preview.png', link: '#' },
    { name: 'Tractor', img: 'assets/images/tractor-image-removebg-preview.png', link: '#' },
    { name: 'JCB', img: 'assets/images/JCB-image-removebg-preview.png', link: '#' }
  ];
}
