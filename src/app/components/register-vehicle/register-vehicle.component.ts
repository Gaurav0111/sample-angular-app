import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register-vehicle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent, FooterComponent, HttpClientModule],
  templateUrl: './register-vehicle.component.html',
  styleUrls: ['./register-vehicle.component.scss']
})
export class RegisterVehicleComponent {
  registrationNumber: string | undefined;
  vehicleForm: FormGroup;
  currentStep = 1;
  manufacturingYears: number[] = [];
  availableLocations: string[] = [];
  fuelTypes = ['Petrol', 'Diesel', 'Electric', 'CNG'];
  transmissions = ['Automatic', 'Manual'];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.registrationNumber = navigation?.extras?.state?.['Number'];
    const currentYear = new Date().getFullYear();
    for (let y = currentYear; y >= currentYear - 25; y--) {
      this.manufacturingYears.push(y);
    }
    this.http.get<any[]>('assets/cities.json').subscribe(data => {
      this.availableLocations = data
        .filter(city => city.country_code === 'IN')
        .map(city => city.name)
        .sort();
    });
    this.vehicleForm = this.fb.group({
      registrationNumber: [this.registrationNumber, [Validators.required,Validators.pattern(/^[A-Z]{2} ?\d{1,3} ?[A-Z]{1,3} ?\d{4}$/i),],],
      locations: ['', Validators.required],
      brand: ['', Validators.required],
      fuelType: ['', Validators.required],
      transmission: ['', Validators.required],
      manufacturingYear: ['', [Validators.required]],
      carModel: ['', Validators.required],
      kilometersDriven: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      planningToSell: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }

  nextStep() {
    if (this.currentStep === 1 && this.isStep1Valid()) {
      this.currentStep++;
    } else if (this.currentStep === 2 && this.isStep2Valid()) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) this.currentStep--;
  }

  isStep1Valid() {
    return this.vehicleForm.get('locations')?.valid &&
      this.vehicleForm.get('brand')?.valid &&
      this.vehicleForm.get('manufacturingYear')?.valid &&
      this.vehicleForm.get('fuelType')?.valid;
  }

  isStep2Valid() {
    return this.vehicleForm.get('carModel')?.valid &&
      this.vehicleForm.get('kilometersDriven')?.valid &&
      this.vehicleForm.get('planningToSell')?.valid &&
      this.vehicleForm.get('transmission')?.valid;
  }

  onSubmit() {
    if (this.vehicleForm.valid) {
      console.log('Form Submitted:', this.vehicleForm.value);
    }
  }
}
