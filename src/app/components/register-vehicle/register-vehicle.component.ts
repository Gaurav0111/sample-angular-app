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
  formVisible = true;
  registrationNumber: string | undefined;
  vehicleForm: FormGroup;
  currentStep = 1;
  manufacturingYears: number[] = [];
  availableStates: string[] = [];
  allCities: { state_name: string; name: string; country_code: string }[] = [];
  citiesForSelectedState: string[] = [];
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

    this.http.get<any[]>('https://raw.githubusercontent.com/Gaurav0111/sample-angular-app/main/src/assets/cities.json')
      .subscribe(data => {
        this.allCities = data.filter(city => city.country_code === 'IN');
        this.availableStates = [...new Set(this.allCities.map(city => city.state_name))].sort();
      });

    this.vehicleForm = this.fb.group({
      registrationNumber: [this.registrationNumber, [Validators.required, Validators.pattern(/^[A-Z]{2} ?\d{1,3} ?[A-Z]{1,3} ?\d{4}$/i)]],
      state: ['', Validators.required],
      city: ['', Validators.required],
      brand: ['', Validators.required],
      fuelType: ['', Validators.required],
      transmission: ['', Validators.required],
      manufacturingYear: ['', Validators.required],
      carModel: ['', Validators.required],
      kilometersDriven: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      planningToSell: ['', Validators.required],
      // phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });

    this.vehicleForm.get('state')?.valueChanges.subscribe(selectedState => {
      this.citiesForSelectedState = this.allCities
        .filter(city => city.state_name === selectedState)
        .map(city => city.name)
        .sort();
      this.vehicleForm.get('city')?.setValue('');
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
    return this.vehicleForm.get('state')?.valid &&
      this.vehicleForm.get('city')?.valid &&
      this.vehicleForm.get('brand')?.valid &&
      this.vehicleForm.get('fuelType')?.valid;
  }

  isStep2Valid() {
    return this.vehicleForm.get('carModel')?.valid &&
      this.vehicleForm.get('manufacturingYear')?.valid &&
      this.vehicleForm.get('kilometersDriven')?.valid &&
      this.vehicleForm.get('planningToSell')?.valid &&
      this.vehicleForm.get('transmission')?.valid;
  }
  resetForm() {
    this.vehicleForm.patchValue({ carModel: '' });
    this.vehicleForm.patchValue({ kilometersDriven: '' });
    this.vehicleForm.patchValue({ transmission: '' });
    this.vehicleForm.patchValue({ brand: '' });
    this.vehicleForm.patchValue({ fuelType: '' });
    this.vehicleForm.patchValue({ phoneNumber: '' });
    this.vehicleForm.get('manufacturingYear')?.setValue('');
    this.vehicleForm.get('planningToSell')?.setValue('');
    this.vehicleForm.get('state')?.setValue('');
    this.vehicleForm.get('city')?.setValue('');
    this.vehicleForm.get('fuelType')?.setValue('');
  }

  onSubmit() {
    if (this.vehicleForm.valid) {
      console.log('Form Submitted:', this.vehicleForm.value);
      this.resetForm();
    }
  }
}
