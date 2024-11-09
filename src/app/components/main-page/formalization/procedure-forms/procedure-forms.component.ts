// src/app/components/main-page/formalization/procedure-forms/procedure-forms.component.ts
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {DatoService} from '../../../../services/forms-api.service';

@Component({
  selector: 'app-procedure-forms',
  templateUrl: './procedure-forms.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./procedure-forms.component.css']
})
export class ProcedureFormsComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private datoService: DatoService) {
    this.form = this.fb.group({
      razon_social: ['', Validators.required],
      domicilio_legal: ['', Validators.required],
      departamento_provincia_distrito: ['', Validators.required],
      nombre_comercial: ['', Validators.required],
      direccion: ['', Validators.required],
      departamento: ['', Validators.required],
      provincia: ['', Validators.required],
      distrito: ['', Validators.required],
      telefonos: ['', Validators.required],
      pagina_web: ['', Validators.required],
      redes_sociales: ['', Validators.required],
      fecha_inicio_operaciones: ['', Validators.required],
      licencia_funcionamiento: ['', Validators.required],
      fecha_expedicion: ['', Validators.required],
      infraestructura: ['', Validators.required],
      equipamiento: ['', Validators.required],
      personal_calificado: ['', Validators.required],
      condiciones_digitales: ['', Validators.required],
      modalidad_turismo: ['', Validators.required],
      tipo_turismo: ['', Validators.required],
      asociacion_turismo: ['', Validators.required],
      calificacion_calidad: ['', Validators.required],
      fecha: ['', Validators.required],
      firma: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');

      // Verificar si los datos del usuario existen
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
        ...this.form.value
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
