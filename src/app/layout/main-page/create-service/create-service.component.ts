import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {NgIf} from '@angular/common';
import {TouristServiceService} from '../../../services/touristService/tourist-service.service';
import {TouristService} from '../../../models/tourist-service.model';

@Component({
  selector: 'app-create-service',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent {
  serviceForm: FormGroup;

  // Campo actual para mostrar consejos
  currentField: string | null = null;
  userId: string = localStorage.getItem('user_id') || '';

  setCurrentField(field: string) {
    this.currentField = field;
  }

  constructor(private fb: FormBuilder, private touristServiceService: TouristServiceService, private snackBar: MatSnackBar) {
    this.serviceForm = this.fb.group({
      title_service: ['', Validators.required],
      description: ['', Validators.required],
      itinerary: ['', Validators.required],
      included_services: ['', Validators.required],
      not_included_services: ['', Validators.required],
      recommendations: ['', Validators.required],
      picturesUrls: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.serviceForm.valid) {
      const serviceData: TouristService = {
        account_id: this.userId,
        title_service: this.serviceForm.value.title_service,
        description: this.serviceForm.value.description,
        itinerary: this.serviceForm.value.itinerary,
        included_services: this.serviceForm.value.included_services,
        not_included_services: this.serviceForm.value.not_included_services,
        recommendations: this.serviceForm.value.recommendations,
        picturesUrls: this.serviceForm.value.picturesUrls.split(',').map((url: string) => url.trim()),
        __v: 0
      };

      console.log(serviceData);

      this.touristServiceService.createTouristService(serviceData).subscribe(response => {
        this.snackBar.open('Servicio turistico creado con exito', 'Cerrar', {
          duration: 3000,
        });
        console.log('Servicio turistico creado con exito', response);
      }, error => {
        console.error('Error al crear el servicio turistico', error);
      });
    }
  }
}
