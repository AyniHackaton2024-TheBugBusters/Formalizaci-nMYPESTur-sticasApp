import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristServiceCardComponent } from './tourist-service-card.component';

describe('TouristServiceCardComponent', () => {
  let component: TouristServiceCardComponent;
  let fixture: ComponentFixture<TouristServiceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TouristServiceCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouristServiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
