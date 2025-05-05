import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-asked-questions',
  imports: [CommonModule],
  templateUrl: './asked-questions.component.html',
  styleUrls: ['./asked-questions.component.scss']
})
export class AskedQuestionsComponent {
  faqs = [
    {
      question: 'What types of vehicles can I buy or sell on this platform?',
      answer: 'You can buy or sell a wide range of vehicles including Bikes, Cars, Scooters, Electric Vehicles (EVs), Bicycles, Taxis, Buses, Trucks, Tractors, and JCBs.'
    },
    {
      question: 'How do I sell my vehicle here?',
      answer: 'Selling is easy! Simply create an account, upload clear photos of your vehicle, provide accurate details like price, location, kilometers driven, and vehicle condition — then publish your listing.'
    },
    {
      question: 'Is there a listing fee for selling my vehicle?',
      answer: 'Currently, listing your vehicle is free. However, for premium features like highlighted listings or top placement, there may be optional charges.'
    },
    {
      question: 'How can I contact a seller if I’m interested in a vehicle?',
      answer: 'Once you find a vehicle you like, you can directly contact the seller via the contact button provided on the vehicle’s page.'
    },
    {
      question: 'Are electric vehicles (EVs) available for sale here?',
      answer: 'Yes! We have a dedicated section for buying and selling Electric Vehicles (EVs) including electric cars, bikes, and scooters.'
    },
    {
      question: 'Can I list commercial vehicles like Buses, Trucks, and JCBs?',
      answer: 'Absolutely! Our platform fully supports the buying and selling of commercial vehicles like Buses, Trucks, Tractors, and JCBs.'
    },
    {
      question: 'How can I ensure a safe transaction?',
      answer: 'Always meet the buyer or seller in a public place, verify all vehicle documents before making any payment, and avoid sharing sensitive information online.'
    },
    {
      question: 'What documents are required to sell my vehicle?',
      answer: 'Typically, you’ll need the Registration Certificate (RC), insurance papers, Pollution Under Control (PUC) certificate, and a valid ID proof. Check local regulations for more.'
    },
    {
      question: 'Can I edit or delete my vehicle listing later?',
      answer: 'Yes! After logging into your account, you can easily edit or remove your vehicle listing at any time through your dashboard.'
    },
    {
      question: 'How do I know if a vehicle listed is genuine?',
      answer: 'We encourage all sellers to provide detailed information and real photos. However, buyers should always personally inspect the vehicle and verify documents before finalizing any purchase.'
    }
  ];
}
