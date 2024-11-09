// src/app/components/main-page/formalization/procedure-forms/procedure-forms.component.ts
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { DatoService } from '../../../../services/forms-api.service';
import {NgIf} from '@angular/common';

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
  totalSteps = 8;
  step1Form: FormGroup;
  step2Form: FormGroup;
  step3Form: FormGroup;
  step4Form: FormGroup;
  step5Form: FormGroup;
  step6Form: FormGroup;
  step7Form: FormGroup;
  step8Form: FormGroup;

  constructor(private fb: FormBuilder, private datoService: DatoService) {
    this.step1Form = this.fb.group({
      razon_social: ['', Validators.required],
      domicilio_legal: ['', Validators.required],
      departamento_provincia_distrito: ['', Validators.required]
    });

    this.step2Form = this.fb.group({
      nombre_comercial: ['', Validators.required],
      direccion: ['', Validators.required],
      departamento: ['', Validators.required]
    });

    this.step3Form = this.fb.group({
      provincia: ['', Validators.required],
      distrito: ['', Validators.required],
      telefonos: ['', Validators.required]
    });

    this.step4Form = this.fb.group({
      pagina_web: ['', Validators.required],
      redes_sociales: ['', Validators.required],
      fecha_inicio_operaciones: ['', Validators.required]
    });

    this.step5Form = this.fb.group({
      licencia_funcionamiento: ['', Validators.required],
      fecha_expedicion: ['', Validators.required],
      infraestructura: ['', Validators.required]
    });

    this.step6Form = this.fb.group({
      equipamiento: ['', Validators.required],
      personal_calificado: ['', Validators.required],
      condiciones_digitales: ['', Validators.required]
    });

    this.step7Form = this.fb.group({
      modalidad_turismo: ['', Validators.required],
      tipo_turismo: ['', Validators.required],
      asociacion_turismo: ['', Validators.required]
    });

    this.step8Form = this.fb.group({
      calificacion_calidad: ['', Validators.required],
      fecha: ['', Validators.required],
      firma: ['', Validators.required]
    });
  }

  nextStep() {
    if (this.isStepValid()) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
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
      case 5:
        return this.step6Form.valid;
      case 6:
        return this.step7Form.valid;
      case 7:
        return this.step8Form.valid;
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
        ...this.step5Form.value,
        ...this.step6Form.value,
        ...this.step7Form.value,
        ...this.step8Form.value
      };

      console.log('formData antes de enviar:', formData);

      this.datoService.createDato(formData).subscribe(
        response => {
          console.log('Datos enviados correctamente', response);
        },
        error => {
          console.error('Error al enviar los datos', error);
        }
      );
    }
  }
}
