import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureProgressComponent } from './procedure-progress.component';

describe('ProcedureProgressComponent', () => {
  let component: ProcedureProgressComponent;
  let fixture: ComponentFixture<ProcedureProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcedureProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcedureProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
