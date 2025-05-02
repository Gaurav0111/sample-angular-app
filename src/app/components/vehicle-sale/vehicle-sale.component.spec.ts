import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSaleComponent } from './vehicle-sale.component';

describe('VehicleSaleComponent', () => {
  let component: VehicleSaleComponent;
  let fixture: ComponentFixture<VehicleSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleSaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
