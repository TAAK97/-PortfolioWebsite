import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludeTestimonalComponent } from './include-testimonals.component';

describe('IncludeTestimonalsComponent', () => {
  let component: IncludeTestimonalComponent;
  let fixture: ComponentFixture<IncludeTestimonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncludeTestimonalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncludeTestimonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
