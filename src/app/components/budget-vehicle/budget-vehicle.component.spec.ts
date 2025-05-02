import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetVehicleComponent } from './budget-vehicle.component';

describe('BudgetVehicleComponent', () => {
  let component: BudgetVehicleComponent;
  let fixture: ComponentFixture<BudgetVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetVehicleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
