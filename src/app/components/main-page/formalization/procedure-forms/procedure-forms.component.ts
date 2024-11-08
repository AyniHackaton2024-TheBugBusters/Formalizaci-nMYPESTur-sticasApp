import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-procedure-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf

  ],
  templateUrl: './procedure-forms.component.html',
  styleUrl: './procedure-forms.component.css'
})
export class ProcedureFormsComponent {
  step1Form: FormGroup;
  step2Form: FormGroup;
  step3Form: FormGroup;
  currentStep: number = 0;

  constructor(private fb: FormBuilder) {
    this.step1Form = this.fb.group({
      companyName: ['', Validators.required]
    });

    this.step2Form = this.fb.group({
      rucNumber: ['', Validators.required]
    });

    this.step3Form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  nextStep() {
    if (this.currentStep === 0 && this.step1Form.valid) {
      this.currentStep++;
    } else if (this.currentStep === 1 && this.step2Form.valid) {
      this.currentStep++;
    } else if (this.currentStep === 2 && this.step3Form.valid) {
      // Submit the form or perform the final action
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}
