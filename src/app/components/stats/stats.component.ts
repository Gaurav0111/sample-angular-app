import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {
  stats = [
    { icon: '📈', value: '1 Lakh+', label: 'cars purchased' },
    { icon: '⭐', value: '4.7', label: 'average rating' },
    { icon: '📍', value: '40+', label: 'cities in India' },
  ];
}
