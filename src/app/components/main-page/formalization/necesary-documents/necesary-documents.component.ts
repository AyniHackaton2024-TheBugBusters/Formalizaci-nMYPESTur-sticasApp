import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-necesary-documents',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgForOf
  ],
  templateUrl: './necesary-documents.component.html',
  styleUrl: './necesary-documents.component.css'
})
export class NecesaryDocumentsComponent {
  isIdentityValidated = false;

  // Documentos y registros requeridos para la formalización
  requisitos = {
    documentos: [
      { nombre: 'Declaración Jurada de Condiciones Mínimas', enlaceDescarga: '/assets/docs/declaracion-jurada.pdf' },
      { nombre: 'Plan de Negocio o Estrategia Comercial', enlaceDescarga: '/assets/docs/plan-negocio.pdf' }
    ],
    registros: [
      { nombre: 'Registro Único de Contribuyentes (RUC)', enlaceConsulta: 'https://www.sunat.gob.pe/' },
      { nombre: 'Inscripción en Directorio Nacional de Prestadores de Servicios Turísticos', enlaceConsulta: 'https://turismoin.gob.pe/' }
    ]
  };
}
