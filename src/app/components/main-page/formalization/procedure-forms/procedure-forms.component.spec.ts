import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureFormsComponent } from './procedure-forms.component';

describe('ProcedureFormsComponent', () => {
  let component: ProcedureFormsComponent;
  let fixture: ComponentFixture<ProcedureFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcedureFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcedureFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
