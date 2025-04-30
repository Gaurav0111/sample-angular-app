import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { AutomobileDetailsModel } from '../../Model/automobileDetailsModel.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-automobile-detail',
  imports: [HeaderComponent, RouterLink, CommonModule, FooterComponent, FormsModule],
  templateUrl: './automobile-detail.component.html',
  styleUrl: './automobile-detail.component.scss'
})
export class AutomobileDetailComponent implements OnInit {
  filters = {
    fuelType: '',
    transmission: '',
    location: '',
    brand: ''
  };
  isMenuOpen = false;
  fuelTypes: string[] = [];
  transmissions: string[] = [];
  locations: string[] = [];
  brands: string[] = [];
  type: string = '';
  vehicleList: any[] = [];
  originalVehicleList: any[] = [];
  selectedVehicle: AutomobileDetailsModel | null = null;
  isPopupOpen: boolean = false;
  allVehicles: { [key in 'bike' | 'car' | 'bus' | 'ev' | 'jcb' | 'scooter' | 'taxi' | 'tractor' | 'truck' | 'bicycle']: AutomobileDetailsModel[] } = {
    bike: [
      { title: '2023 KTM Duke 390', brand: 'KTM', price: 310000, location: 'Delhi', fuelType: 'Petrol', transmission: 'Manual', imageUrl: 'https://cdn.bikedekho.com/upload/modellogo/64d4a913880f1.jpg', kmsDriven: 2500 },
      { title: '2022 Yamaha R15 V4', brand: 'Yamaha', price: 180000, location: 'Mumbai', fuelType: 'Petrol', transmission: 'Manual', imageUrl: 'https://cdn.bikedekho.com/processedimages/yamaha/r15-v4/640X309/r15-v463ea1fcd553f3.jpg', kmsDriven: 3200 },
      { title: '2021 Bajaj Pulsar 150', brand: 'Bajaj', price: 95000, location: 'Bangalore', fuelType: 'Petrol', transmission: 'Manual', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOX6o1lQNGXmhLh_KPk6hnvONKe0hK7FRrg&s', kmsDriven: 7000 },
      { title: '2020 Honda CB Shine', brand: 'Honda', price: 75000, location: 'Chennai', fuelType: 'Petrol', transmission: 'Manual', imageUrl: 'https://img.autocarindia.com/ExtraImages/20230502110012_Shine%201.jpg?w=700&c=1', kmsDriven: 9000 },
      { title: '2022 Royal Enfield Meteor 350', brand: 'Royal Enfield', price: 210000, location: 'Hyderabad', fuelType: 'Petrol', transmission: 'Manual', imageUrl: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/51245/meteor-350-right-front-three-quarter.jpeg?q=80', kmsDriven: 4100 },
      { title: '2021 TVS Apache RTR 200', brand: 'TVS', price: 120000, location: 'Pune', fuelType: 'Petrol', transmission: 'Manual', imageUrl: 'https://media.zigcdn.com/media/content/2016/Jan/tvs-apache-200-4v-launch-zigwheels-t.jpg?tr=w-1200', kmsDriven: 5300 }
    ],
    car: [
      { title: '2023 Tata Nexon EV', brand: 'Tata', price: 1600000, location: 'Delhi', fuelType: 'Electric', transmission: 'Automatic', imageUrl: 'https://motoringworld.in/wp-content/uploads/2022/11/Tata-Nexon-EV-Max-Trail-web5.jpg', kmsDriven: 500 },
      { title: '2022 Maruti Suzuki Swift', brand: 'Maruti', price: 750000, location: 'Mumbai', fuelType: 'Petrol', transmission: 'Manual', imageUrl: 'https://img.autocarindia.com/Galleries/20180119094334_New-Maruti-Swift-rear-thre.jpg?w=736&h=488&q=75&c=1', kmsDriven: 3000 },
      { title: '2021 Hyundai i20 Asta', brand: 'Hyundai', price: 900000, location: 'Bangalore', fuelType: 'Petrol', transmission: 'Automatic', imageUrl: 'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F1551%2F622756%2Fcover_image-20241205161329.jpg&w=3840&q=75', kmsDriven: 6000 },
      { title: '2022 Kia Seltos HTX', brand: 'Kia', price: 1450000, location: 'Dehradun', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://imgd.aeplcdn.com/300x225/vimages/202504/3921641_9564_1_1744565844135.jpg?q=80', kmsDriven: 4500 },
      { title: '2020 Honda City ZX', brand: 'Honda', price: 1100000, location: 'Pune', fuelType: 'Petrol', transmission: 'CVT', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vR7bXRfbJS_Cqa7VpolRpYN1dLJOOdhSrA&s', kmsDriven: 8000 },
      { title: '2021 Mahindra Thar LX', brand: 'Mahindra', price: 1550000, location: 'Hyderabad', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://media.assettype.com/evoindia/2024-08-16/fwnmw008/Roxx-1.jpg', kmsDriven: 5500 }
    ],
    bus: [
      { title: '2019 Volvo 9400', brand: 'Volvo', price: 8500000, location: 'Mumbai', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://i.ytimg.com/vi/h1CU6gvO4ss/hqdefault.jpg', kmsDriven: 120000 },
      { title: '2018 Ashok Leyland Lynx', brand: 'Ashok', price: 4500000, location: 'Chennai', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYpBXWS0xMkVB0w3bAqTKoZTmGyNhu7lFKQ&s', kmsDriven: 135000 },
      { title: '2020 Tata Starbus', brand: 'Tata', price: 5500000, location: 'Delhi', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://live.staticflickr.com/65535/51695917109_d3c88ce3e4_b.jpg', kmsDriven: 95000 },
      { title: '2021 Force Traveller 3700', brand: 'Force', price: 2700000, location: 'Bangalore', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://5.imimg.com/data5/BX/YM/TV/GLADMIN-107699/force-traveller-3700-super-van-500x500.PNG', kmsDriven: 40000 },
      { title: '2022 Eicher Skyline Pro', brand: 'Eicher', price: 6200000, location: 'Pune', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://buscdn.cardekho.com/in/ashok-leyland/skyline-pro-3011-k-school/ashok-leyland-skyline-pro-3011-k-school.jpg?impolicy=resize&imwidth=480', kmsDriven: 60000 },
      { title: '2020 Mahindra Cruzio', brand: 'Mahindra', price: 5000000, location: 'Hyderabad', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://img.gaadibazaar.in/uv-images/2637884/conversions/2997c03d-3329-46ae-877c-d105ea78d851-vdp.webp', kmsDriven: 70000 }
    ],
    ev: [
      { title: '2023 Ola S1 Pro', brand: 'Ola', price: 140000, location: 'Bangalore', fuelType: 'Electric', transmission: 'Automatic', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDsVsF93X-u4mnt3LTEeveyv9wz85rgOfK2w&s', kmsDriven: 800 },
      { title: '2022 Ather 450X', brand: 'Ather', price: 160000, location: 'Chennai', fuelType: 'Electric', transmission: 'Automatic', imageUrl: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/147925/450x-right-front-three-quarter.jpeg?isig=0&q=80', kmsDriven: 1200 },
      { title: '2023 Tata Tigor EV', brand: 'Tata', price: 1300000, location: 'Mumbai', fuelType: 'Electric', transmission: 'Automatic', imageUrl: 'https://static.toiimg.com/thumb/msid-95707222,width-1070,height-580,imgsize-747725,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg', kmsDriven: 1500 },
      { title: '2021 MG ZS EV', brand: 'MG', price: 2200000, location: 'Delhi', fuelType: 'Electric', transmission: 'Automatic', imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRP7y-x3ACI1YPBiIfZQaOMebXbF1JMWXeXPtkTW8aF9rlCSPxpkSrn0RvsoiUp27ogw6ANJb8uDn9rxnaKJoFuQgWBazG15_mANRg3yQ', kmsDriven: 5000 },
      { title: '2022 Hyundai Kona Electric', brand: 'Hyundai', price: 2400000, location: 'Hyderabad', fuelType: 'Electric', transmission: 'Automatic', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDhP1dDCmjEJ3IE-pFJAWE2f6Ao0y3gvfAYQ&s', kmsDriven: 3000 },
      { title: '2023 TVS iQube', brand: 'TVS', price: 120000, location: 'Pune', fuelType: 'Electric', transmission: 'Automatic', imageUrl: 'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcms%2Farticles%2F2023%2F4%2F3206719%2Farticles%2F2023%2F4%2F3206714%2Farticles%2F2023%2F4%2F3206727%2Farticles%2F2023%2F4%2F3206727%2Farticles%2F2023%2F4%2F3206727%2Farticles%2F2023%2F4%2F3206761%2Farticles%2F2023%2F4%2F3206817%2Farticles%2F2023%2F4%2F3206874%2Farticles%2F2023%2F4%2F3206874%2Farticles%2F2023%2F4%2F3206902%2Farticles%2F2023%2F4%2F3206902%2Farticles%2F2023%2F4%2F3206934%2Farticles%2F2023%2F5%2F3206982%2Farticles%2F2023%2F5%2F3207025%2Ftvs_to_refund_iqube_customers_who_paid_extra_for_a_charger_carandbike_1_0798d76086.jpg&w=640&q=75', kmsDriven: 1000 }
    ],
    jcb: [
      { title: '2018 JCB 3DX', brand: 'JCB', price: 2500000, location: 'Mumbai', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMVobp3B_xgvbT1jfpMImbUwrBzcQfTVAUPw&s', kmsDriven: 15000 },
      { title: '2019 JCB 430ZX', brand: 'JCB', price: 3200000, location: 'Delhi', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/5/422383746/GM/VT/KY/3049355/55b2c13a-6ce4-42e2-b238-759aa6e1211c.jpg', kmsDriven: 18000 },
      { title: '2020 JCB Loadall 530-70', brand: 'JCB', price: 4000000, location: 'Bangalore', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvYBUsOhaYFeLyyrTyycr_b6920bIiCmSmQ&s', kmsDriven: 10000 },
      { title: '2021 JCB 155 Skid Steer', brand: 'JCB', price: 1700000, location: 'Pune', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://img.linemedia.com/img/s/construction-equipment-skid-steer-JCB-155---1737443674730852675_common--24103111440385881700.jpg', kmsDriven: 7000 },
      { title: '2019 JCB 116 Soil Compactor', brand: 'JCB', price: 4500000, location: 'Chennai', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/9/PS/OC/RX/4352756/jcb-116-single-drum-soil-compactor.jpg', kmsDriven: 11000 },
      { title: '2020 JCB 2DX', brand: 'JCB', price: 2200000, location: 'Hyderabad', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://5.imimg.com/data5/KX/VM/KT/GLADMIN-12/jcb2-1.jpg', kmsDriven: 9500 }
    ],
    scooter: [
      { title: '2022 Honda Activa 6G', brand: 'Honda', price: 85000, location: 'Delhi', fuelType: 'Petrol', transmission: 'Automatic', imageUrl: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=80', kmsDriven: 2000 },
      { title: '2023 TVS Jupiter 125', brand: 'TVS', price: 90000, location: 'Mumbai', fuelType: 'Petrol', transmission: 'Automatic', imageUrl: 'https://i0.wp.com/www.bikex.in/wp-content/uploads/2024/10/jupiter-125-1-1.jpeg?fit=1280%2C960&ssl=1', kmsDriven: 1000 },
      { title: '2021 Suzuki Access 125', brand: 'Suzuki', price: 78000, location: 'Bangalore', fuelType: 'Petrol', transmission: 'Automatic', imageUrl: 'https://content.jdmagicbox.com/comp/haveri/n6/9999p8375.8375.200106105126.i4n6/catalogue/limbayyaswami-suzuki-haveri-bazar-haveri-motorcycle-dealers-ujkxao553j-250.jpg', kmsDriven: 3000 },
      { title: '2022 Yamaha Fascino 125', brand: 'Yamaha', price: 95000, location: 'Chennai', fuelType: 'Petrol', transmission: 'Automatic', imageUrl: 'https://cdn1.acedms.com/w709/photos/listing/2023-12-06/c3f38c6704f268397054d0a9829e3777_extra_large.jpg.webp', kmsDriven: 1500 },
      { title: '2020 Hero Maestro Edge 125', brand: 'Hero', price: 70000, location: 'Hyderabad', fuelType: 'Petrol', transmission: 'Automatic', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4IuMPuRV3RsOG91ce3jCPUlMWTCWR54FDFA&s', kmsDriven: 4000 },
      { title: '2021 Aprilia SR 125', brand: 'Aprilia', price: 100000, location: 'Pune', fuelType: 'Petrol', transmission: 'Automatic', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2810OFCDOF9YT7XUe08ax9VrF65TbWfzNWw&s', kmsDriven: 2500 }
    ],
    taxi: [
      { title: '2020 Toyota Innova Crysta', brand: 'Toyota', price: 1900000, location: 'Delhi', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://i.ytimg.com/vi/7Yhv2c3XHrY/maxresdefault.jpg', kmsDriven: 95000 },
      { title: '2019 Maruti Suzuki Dzire Tour', brand: 'Maruti', price: 750000, location: 'Mumbai', fuelType: 'Petrol', transmission: 'Manual', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7CFDFnP3P3Mm_vjpCtrt4Z5LSpalbryZ4yQ&s', kmsDriven: 85000 },
      { title: '2021 Hyundai Aura', brand: 'Hyundai', price: 850000, location: 'Bangalore', fuelType: 'Petrol', transmission: 'Manual', imageUrl: 'https://www.mahindrafirstchoice.com/_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F234%2F608463%2Fcover_image-20240426114210.jpeg&w=1200&q=75', kmsDriven: 40000 },
      { title: '2022 Maruti Suzuki Ertiga Tour', brand: 'Maruti', price: 1100000, location: 'Chennai', fuelType: 'CNG', transmission: 'Manual', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdH71H3Lb3BsikXpepGwPooWdcR2sAumE4Jw&s', kmsDriven: 30000 },
      { title: '2020 Tata Indigo ECS', brand: 'Tata', price: 450000, location: 'Hyderabad', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://www.motorbeam.com/wp-content/uploads/2012-Tata-Indigo-eCS-Long-Term-Review.jpg', kmsDriven: 120000 },
      { title: '2021 Renault Triber', brand: 'Renault', price: 750000, location: 'Pune', fuelType: 'Petrol', transmission: 'Manual', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/2021_Renault_Triber_RXZ_%28Indonesia%29_front_view.jpg/960px-2021_Renault_Triber_RXZ_%28Indonesia%29_front_view.jpg', kmsDriven: 25000 }
    ],
    tractor: [
      { title: '2021 Mahindra 575 DI', brand: 'Mahindra', price: 650000, location: 'Mumbai', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/9/IR/KZ/GP/31862577/mahindra-575-di-xp-plus.jpg', kmsDriven: 3000 },
      { title: '2020 Swaraj 744 FE', brand: 'Swaraj', price: 600000, location: 'Delhi', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://5.imimg.com/data5/MS/DM/ZV/GLADMIN-12/hqdefault-500x500.jpg', kmsDriven: 4500 },
      { title: '2022 John Deere 5105', brand: 'John Deere', price: 750000, location: 'Chennai', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/5/309525840/LD/VQ/DS/185376839/51-2wd-22-1.jpg', kmsDriven: 1500 },
      { title: '2019 Sonalika DI 60', brand: 'Sonalika', price: 580000, location: 'Bangalore', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://img.gaadibazaar.in/uv-images/1996754/conversions/de510bd3-421f-450b-90bc-506b4f23bc0e-vdp.webp', kmsDriven: 6000 },
      { title: '2021 Eicher 485', brand: 'Eicher', price: 700000, location: 'Pune', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/11/NZ/XS/PP/151225885/2021-eicher-485.jpeg', kmsDriven: 3500 },
      { title: '2020 New Holland 3630 TX', brand: 'New Holland', price: 800000, location: 'Hyderabad', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://assets.tractorjunction.com/tractor-junction/assets/images/images/oldTractor/3630-tx-super-1720102728-0.webp', kmsDriven: 5000 }
    ],
    truck: [
      { title: '2021 Tata LPT 3118', brand: 'Tata', price: 2600000, location: 'Delhi', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://wheelkart.in/wp-content/uploads/2023/12/b1.jpg', kmsDriven: 100000 },
      { title: '2020 Ashok Leyland Boss 1215', brand: 'Ashok', price: 2300000, location: 'Mumbai', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://assets.tractorjunction.com/truck-junction/assets/images/desciption-images/2-ashok-leyland-boss-1215-hb-truck-1741345579.webp', kmsDriven: 85000 },
      { title: '2019 Eicher Pro 3015', brand: 'Eicher', price: 2000000, location: 'Chennai', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://assets.tractorjunction.com/truck-junction/assets/images/usedTruck/sell-truckImage-1690175368.jpg?format=webp', kmsDriven: 120000 },
      { title: '2022 BharatBenz 1617R', brand: 'BharatBenz', price: 2800000, location: 'Bangalore', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROKbW87e-fbL3-p3WsyfU00BVrPicIml1qCA&s', kmsDriven: 60000 },
      { title: '2021 Mahindra Furio 12', brand: 'Mahindra', price: 2400000, location: 'Pune', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://5.imimg.com/data5/ANDROID/Default/2021/12/EA/OU/PH/129304272/prod-20211223-1315402979216028589568599-jpg.jpg', kmsDriven: 70000 },
      { title: '2020 Tata Ultra T.16', brand: 'Tata', price: 2200000, location: 'Hyderabad', fuelType: 'Diesel', transmission: 'Manual', imageUrl: 'https://img.gaadibazaar.in/uv-images/1541753/conversions/4cacd92a-5d8d-4903-b8c5-959785772368-vdp.webp', kmsDriven: 90000 }
    ],
    bicycle: [
      { title: '2023 Hero Sprint Pro', brand: 'Hero', price: 18000, location: 'Delhi', fuelType: 'Human', transmission: 'Manual', imageUrl: 'https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/reviews/hero-sprint-reaction-27-5t.webp', kmsDriven: 200 },
      { title: '2022 Firefox Cyclone', brand: 'Firefox', price: 22000, location: 'Mumbai', fuelType: 'Human', transmission: 'Manual', imageUrl: 'https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/bicycles/firefox-cyclone-27-5-d-new-3.webp', kmsDriven: 150 },
      { title: '2021 Btwin Rockrider 520', brand: 'Btwin', price: 25000, location: 'Bangalore', fuelType: 'Human', transmission: 'Manual', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuTEjLyFCs0Kf5F5a9o_Bo3BghRIFdySneRg&s', kmsDriven: 300 },
      { title: '2022 Montra Helicon', brand: 'Montra', price: 28000, location: 'Chennai', fuelType: 'Human', transmission: 'Manual', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9DsCdaNI7uzMZ_dVSG_MwYZkzT9hjBCeCw&s', kmsDriven: 100 },
      { title: '2023 Giant ATX', brand: 'Giant', price: 35000, location: 'Hyderabad', fuelType: 'Human', transmission: 'Manual', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnttf0Ydjp7RC0CC_ilGbtmxjujl7Ef8Ft1Q&s', kmsDriven: 50 },
      { title: '2021 Scott Aspect 950', brand: 'Scott', price: 40000, location: 'Pune', fuelType: 'Human', transmission: 'Manual', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpxsOcZz1jir3ia8zCyhIZNACRpjPGE1XJUw&s', kmsDriven: 180 }
    ]
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type') || '';
    this.vehicleList = this.allVehicles[this.type as keyof typeof this.allVehicles] || [];
    this.originalVehicleList = [...this.vehicleList];
    this.fuelTypes = [...new Set(this.vehicleList.map(v => v.fuelType))];
    this.transmissions = [...new Set(this.vehicleList.map(v => v.transmission))];
    this.locations = [...new Set(this.vehicleList.map(v => v.location))];
    this.brands = [...new Set(this.vehicleList.map(v => v.brand))];
  }
  applyFilters() {
    this.vehicleList = this.originalVehicleList.filter(vehicle => {
      return (!this.filters.fuelType || vehicle.fuelType === this.filters.fuelType) &&
        (!this.filters.transmission || vehicle.transmission === this.filters.transmission) &&
        (!this.filters.brand || vehicle.brand === this.filters.brand) &&
        (!this.filters.location || vehicle.location.toLowerCase().includes(this.filters.location.toLowerCase()));
    });
  }
  resetFilters() {
    this.filters = { fuelType: '', transmission: '', location: '', brand:'' };
    this.vehicleList = [...this.originalVehicleList];
  }

  onSortChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'Default') {
      this.vehicleList = this.originalVehicleList.slice();
    } else if (value === 'priceAsc') {
      this.vehicleList.sort((a, b) => a.price - b.price);
    } else if (value === 'priceDesc') {
      this.vehicleList.sort((a, b) => b.price - a.price);
    } else if (value === 'kmsAsc') {
      this.vehicleList.sort((a, b) => a.kmsDriven - b.kmsDriven);
    } else if (value === 'kmsDesc') {
      this.vehicleList.sort((a, b) => b.kmsDriven - a.kmsDriven);
    }
  }

  openPopup(vehicle: AutomobileDetailsModel) {
    this.selectedVehicle = vehicle;
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }
}
