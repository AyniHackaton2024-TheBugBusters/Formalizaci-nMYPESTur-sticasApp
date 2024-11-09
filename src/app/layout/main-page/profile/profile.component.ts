import { Component } from '@angular/core';
import {MatProgressBar} from '@angular/material/progress-bar';
import {MatCard} from '@angular/material/card';
import {NgClass, NgIf} from '@angular/common';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatProgressBar,
    MatCard,
    NgClass,
    MatButton,
    NgIf
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  formalizado = false;
  validado = false;

  uploadFirma(event: any) {
    // Lógica para subir y previsualizar la firma
    const file = event.target.files[0];
    if (file) {
      // Lógica para guardar el archivo en base64 o enviarlo al backend
      console.log('Firma subida:', file);
    }
  }

  guardarFirma() {
    // Lógica para guardar la firma en el perfil del usuario
    console.log('Firma guardada');
  }
}
