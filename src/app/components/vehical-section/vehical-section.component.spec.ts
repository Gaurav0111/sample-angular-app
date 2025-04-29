import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicalSectionComponent } from './vehical-section.component';

describe('VehicalSectionComponent', () => {
  let component: VehicalSectionComponent;
  let fixture: ComponentFixture<VehicalSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicalSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
