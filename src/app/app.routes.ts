import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AutomobileDetailComponent } from './components/automobile-detail/automobile-detail.component';
import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';
import { RegisterVehicleComponent } from './components/register-vehicle/register-vehicle.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'automobile/:type',
    component: AutomobileDetailComponent,
    pathMatch: 'full',
  },
  {
    path: 'vehical-detail',
    component: VehicleDetailComponent,
    pathMatch: 'full',
  },
  {
    path: 'register-vehicle',
    component: RegisterVehicleComponent,
    pathMatch: 'full',
  },
];
