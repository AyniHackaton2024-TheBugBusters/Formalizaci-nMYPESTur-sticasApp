import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {
  preguntasFrecuentes = [
    {
      pregunta: '¿Cuáles son los requisitos para formalizar una MYPE turística?',
      respuesta: 'Necesitas una declaración jurada, documentos de identidad, y otros requisitos específicos de la municipalidad correspondiente.'
    },
    {
      pregunta: '¿Cuánto tiempo demora el proceso de formalización?',
      respuesta: 'El proceso puede variar según la municipalidad, pero generalmente toma entre 15 y 30 días hábiles.'
    },
    {
      pregunta: '¿Cuál es el costo de la formalización?',
      respuesta: 'El costo depende de la región y el tipo de MYPE. Consulta en tu municipalidad para obtener información actualizada.'
    },
    {
      pregunta: '¿Es obligatorio validar mi identidad?',
      respuesta: 'Sí, es obligatorio validar tu identidad a través de RENIEC para completar el proceso de formalización en línea.'
    },
  ];
}
