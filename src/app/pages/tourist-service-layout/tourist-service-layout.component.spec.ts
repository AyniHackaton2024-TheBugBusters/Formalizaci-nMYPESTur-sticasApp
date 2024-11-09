import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristServiceLayoutComponent } from './tourist-service-layout.component';

describe('TouristServiceLayoutComponent', () => {
  let component: TouristServiceLayoutComponent;
  let fixture: ComponentFixture<TouristServiceLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TouristServiceLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouristServiceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
