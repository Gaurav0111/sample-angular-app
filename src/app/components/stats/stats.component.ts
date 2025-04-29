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
  reviews = [
    { name: 'Surendra Bangar', handle: '@surendra', text: 'Had a great experience – impressed by the team\'s professionalism.', date: '25 Mar, 2025' },
    { name: 'Chirag Khosla', handle: '@chirag', text: 'The car pickup was well-managed. Everything went without a hitch.', date: '14 Mar, 2025' },
    { name: 'Vicky Talreja', handle: '@vicky', text: 'Transparent and smooth process.', date: '10 Mar, 2025' },
    { name: 'Anjali Mehta', handle: '@anjali', text: 'Seamless experience from start to finish.', date: '05 Mar, 2025' },
    { name: 'Ravi Verma', handle: '@ravi', text: 'Highly professional service.', date: '02 Mar, 2025' },
    { name: 'Kriti Sharma', handle: '@kriti', text: 'No hidden charges. Very clear process.', date: '28 Feb, 2025' },
    { name: 'Amit Tiwari', handle: '@amit', text: 'Quick and easy car sale.', date: '25 Feb, 2025' },
    { name: 'Pooja Jain', handle: '@pooja', text: 'Great team, helped me through everything.', date: '20 Feb, 2025' },
    { name: 'Rahul Singh', handle: '@rahul', text: 'Absolutely smooth paperwork.', date: '18 Feb, 2025' },
    { name: 'Neha Kapoor', handle: '@neha', text: 'I got the best deal here!', date: '15 Feb, 2025' },
    { name: 'Arjun Desai', handle: '@arjun', text: 'Very responsive team.', date: '12 Feb, 2025' },
    { name: 'Priya Das', handle: '@priya', text: 'Sold my car in a day!', date: '09 Feb, 2025' },
    { name: 'Karan Patel', handle: '@karan', text: 'Honest pricing and great service.', date: '06 Feb, 2025' },
    { name: 'Isha Malhotra', handle: '@isha', text: 'A very good platform for sellers.', date: '03 Feb, 2025' },
    { name: 'Sameer Khan', handle: '@sameer', text: 'Loved the quick response.', date: '31 Jan, 2025' },
    { name: 'Megha Rao', handle: '@megha', text: 'Highly recommend their service.', date: '29 Jan, 2025' },
    { name: 'Tanya Bhatia', handle: '@tanya', text: 'Sold without any hassle.', date: '27 Jan, 2025' },
    { name: 'Dev Mishra', handle: '@dev', text: 'Best customer support experience.', date: '25 Jan, 2025' },
    { name: 'Asha Yadav', handle: '@asha', text: 'I was impressed with the speed.', date: '22 Jan, 2025' },
    { name: 'Rohit Sinha', handle: '@rohit', text: 'Extremely user-friendly.', date: '20 Jan, 2025' }
  ];
}
