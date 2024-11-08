import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalizationComponent } from './formalization.component';

describe('FormalizationComponent', () => {
  let component: FormalizationComponent;
  let fixture: ComponentFixture<FormalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormalizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
