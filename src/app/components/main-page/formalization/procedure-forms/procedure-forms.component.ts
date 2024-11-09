// src/app/components/main-page/formalization/procedure-forms/procedure-forms.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatoService } from '../../../../services/forms-api.service';
import { NgIf } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-procedure-forms',
  templateUrl: './procedure-forms.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./procedure-forms.component.css']
})
export class ProcedureFormsComponent {
  currentStep = 0;
  totalSteps = 5;
  step1Form: FormGroup;
  step2Form: FormGroup;
  step3Form: FormGroup;
  step4Form: FormGroup;
  step5Form: FormGroup;

  constructor(private fb: FormBuilder, private datoService: DatoService, private snackBar: MatSnackBar, private router: Router) {
    this.step1Form = this.fb.group({
      razon_social: ['', Validators.required],
      domicilio_legal: ['', Validators.required],
      departamento_provincia_distrito: ['', Validators.required],
      nombre_comercial: ['', Validators.required],
      direccion: ['', Validators.required]
    });

    this.step2Form = this.fb.group({
      departamento: ['', Validators.required],
      provincia: ['', Validators.required],
      distrito: ['', Validators.required],
      telefonos: ['', Validators.required],
      pagina_web: ['', Validators.required]
    });

    this.step3Form = this.fb.group({
      redes_sociales: ['', Validators.required],
      fecha_inicio_operaciones: ['', Validators.required],
      licencia_funcionamiento: ['', Validators.required],
      fecha_expedicion: ['', Validators.required],
      infraestructura: ['', Validators.required]
    });

    this.step4Form = this.fb.group({
      equipamiento: ['', Validators.required],
      personal_calificado: ['', Validators.required],
      condiciones_digitales: ['', Validators.required],
      modalidad_turismo: ['', Validators.required],
      tipo_turismo: ['', Validators.required]
    });

    this.step5Form = this.fb.group({
      asociacion_turismo: ['', Validators.required],
      calificacion_calidad: ['', Validators.required],
      fecha: ['', Validators.required],
      firma: ['', Validators.required]
    });
  }

  nextStep() {
    if (this.isStepValid()) {
      this.currentStep = Math.min(this.currentStep + 1, this.totalSteps - 1);
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep = Math.max(this.currentStep - 1, 0);
    }
  }

  isStepValid(): boolean {
    switch (this.currentStep) {
      case 0:
        return this.step1Form.valid;
      case 1:
        return this.step2Form.valid;
      case 2:
        return this.step3Form.valid;
      case 3:
        return this.step4Form.valid;
      case 4:
        return this.step5Form.valid;
      default:
        return false;
    }
  }

  submitForm() {
    if (this.isStepValid()) {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');

      if (!userData.userId) {
        console.error('Error: los datos del usuario no están disponibles.');
        return;
      }

      const { userId, userName, ruc, dni, email } = userData;

      const formData = {
        account_id: userId,
        nombres_apellidos: userName,
        ruc: ruc,
        correo_electronico: email,
        documento_identidad_declarante: dni,
        representante_legal: userName,
        ...this.step1Form.value,
        ...this.step2Form.value,
        ...this.step3Form.value,
        ...this.step4Form.value,
        ...this.step5Form.value
      };

      console.log('formData antes de enviar:', formData);

      this.datoService.createDato(formData).subscribe(
        response => {
          console.log('Datos enviados correctamente', response);
          this.snackBar.open('Trámite creado correctamente', 'Cerrar', {
            duration: 3000
          });
          this.router.navigate(['/formalization']);
        },
        error => {
          console.error('Error al enviar los datos', error);
        }
      );
    }
  }
}
