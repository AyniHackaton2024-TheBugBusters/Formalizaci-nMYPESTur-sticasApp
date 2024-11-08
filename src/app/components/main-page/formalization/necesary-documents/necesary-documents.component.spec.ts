import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecesaryDocumentsComponent } from './necesary-documents.component';

describe('NecesaryDocumentsComponent', () => {
  let component: NecesaryDocumentsComponent;
  let fixture: ComponentFixture<NecesaryDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NecesaryDocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NecesaryDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
