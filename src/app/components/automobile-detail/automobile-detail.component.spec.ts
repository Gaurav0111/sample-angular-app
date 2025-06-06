import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomobileDetailComponent } from './automobile-detail.component';

describe('AutomobileDetailComponent', () => {
  let component: AutomobileDetailComponent;
  let fixture: ComponentFixture<AutomobileDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomobileDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomobileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
