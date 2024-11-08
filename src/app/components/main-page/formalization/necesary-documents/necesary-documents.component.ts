import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-necesary-documents',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './necesary-documents.component.html',
  styleUrl: './necesary-documents.component.css'
})
export class NecesaryDocumentsComponent {
  documentos = [
    { nombre: 'Declaración Jurada', enlaceDescarga: '/assets/plantillas/declaracion-jurada.pdf' },
    { nombre: 'Licencia Comercial', enlaceDescarga: '/assets/plantillas/licencia-comercial.pdf' },
    { nombre: 'RUC (Registro Único de Contribuyente)', enlaceDescarga: '/assets/plantillas/ruc.pdf' }
  ];
  isIdentityValidated = false; // Change based on actual validation state

  ngOnInit() {
    // Logic to check if identity has been validated
    // this.isIdentityValidated = checkIdentityValidation();
  }
}
