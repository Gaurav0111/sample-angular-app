import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vehical-section',
  imports: [CommonModule],
  templateUrl: './vehical-section.component.html',
  styleUrl: './vehical-section.component.scss'
})
export class VehicalSectionComponent {
  vehicles = [
    { title: '2023 KTM Duke 390', brand: 'KTM', price: 310000, location: 'Delhi', fuelType: 'Petrol', transmission: 'Manual', imageUrl: 'https://cdn.bikedekho.com/upload/modellogo/64d4a913880f1.jpg', kmsDriven: 2500 },
    { title: '2022 Maruti Suzuki Swift', brand: 'Maruti', price: 750000, location: 'Mumbai', fuelType: 'Petrol', transmission: 'Manual', imageUrl: 'https://img.autocarindia.com/Galleries/20180119094334_New-Maruti-Swift-rear-thre.jpg?w=736&h=488&q=75&c=1', kmsDriven: 3000 },
    { title: '2018 Ashok Leyland Lynx', brand: 'Ashok', price: 4500000, location: 'Chennai', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYpBXWS0xMkVB0w3bAqTKoZTmGyNhu7lFKQ&s', kmsDriven: 135000 },
    { title: '2022 Ather 450X', brand: 'Ather', price: 160000, location: 'Chennai', fuelType: 'Electric', transmission: 'Automatic', imageUrl: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/147925/450x-right-front-three-quarter.jpeg?isig=0&q=80', kmsDriven: 1200 },
    { title: '2019 JCB 430ZX', brand: 'JCB', price: 3200000, location: 'Delhi', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/5/422383746/GM/VT/KY/3049355/55b2c13a-6ce4-42e2-b238-759aa6e1211c.jpg', kmsDriven: 18000 },
    { title: '2023 TVS Jupiter 125', brand: 'TVS', price: 90000, location: 'Mumbai', fuelType: 'Petrol', transmission: 'Automatic', imageUrl: 'https://i0.wp.com/www.bikex.in/wp-content/uploads/2024/10/jupiter-125-1-1.jpeg?fit=1280%2C960&ssl=1', kmsDriven: 1000 },
    { title: '2019 Maruti Suzuki Dzire Tour', brand: 'Maruti', price: 750000, location: 'Mumbai', fuelType: 'Petrol', transmission: 'Manual', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7CFDFnP3P3Mm_vjpCtrt4Z5LSpalbryZ4yQ&s', kmsDriven: 85000 },
    { title: '2020 Swaraj 744 FE', brand: 'Swaraj', price: 600000, location: 'Delhi', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://5.imimg.com/data5/MS/DM/ZV/GLADMIN-12/hqdefault-500x500.jpg', kmsDriven: 4500 },
    { title: '2020 Ashok Leyland Boss 1215', brand: 'Ashok', price: 2300000, location: 'Mumbai', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://assets.tractorjunction.com/truck-junction/assets/images/desciption-images/2-ashok-leyland-boss-1215-hb-truck-1741345579.webp', kmsDriven: 85000 },
    { title: '2022 Firefox Cyclone', brand: 'Firefox', price: 22000, location: 'Mumbai', fuelType: 'Human', transmission: 'Manual', imageUrl: 'https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/firefox-cyclone-27-5-d-new-3.webp', kmsDriven: 150 },
    { title: '2019 Sonalika DI 60', brand: 'Sonalika', price: 580000, location: 'Bangalore', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://img.gaadibazaar.in/uv-images/1996754/conversions/de510bd3-421f-450b-90bc-506b4f23bc0e-vdp.webp', kmsDriven: 6000 },
    { title: '2021 Eicher 485', brand: 'Eicher', price: 700000, location: 'Pune', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/11/NZ/XS/PP/151225885/2021-eicher-485.jpeg', kmsDriven: 3500 },
    { title: '2021 MG ZS EV', brand: 'MG', price: 2200000, location: 'Delhi', fuelType: 'Electric', transmission: 'Automatic', imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRP7y-x3ACI1YPBiIfZQaOMebXbF1JMWXeXPtkTW8aF9rlCSPxpkSrn0RvsoiUp27ogw6ANJb8uDn9rxnaKJoFuQgWBazG15_mANRg3yQ', kmsDriven: 5000 },
    { title: '2022 Hyundai Kona Electric', brand: 'Hyundai', price: 2400000, location: 'Hyderabad', fuelType: 'Electric', transmission: 'Automatic', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDhP1dDCmjEJ3IE-pFJAWE2f6Ao0y3gvfAYQ&s', kmsDriven: 3000 },
    { title: '2020 Honda CB Shine', brand: 'Honda', price: 75000, location: 'Chennai', fuelType: 'Petrol', transmission: 'Manual', imageUrl: 'https://img.autocarindia.com/ExtraImages/20230502110012_Shine%201.jpg?w=700&c=1', kmsDriven: 9000 },
    { title: '2022 Royal Enfield Meteor 350', brand: 'Royal Enfield', price: 210000, location: 'Hyderabad', fuelType: 'Petrol', transmission: 'Manual', imageUrl: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/51245/meteor-350-right-front-three-quarter.jpeg?q=80', kmsDriven: 4100 }
  ];
  selectedVehicle: any = null;

  openVehicleDetails(vehicle: any) {
    this.selectedVehicle = vehicle;
  }

  closeModal() {
    this.selectedVehicle = null;
  }

}
