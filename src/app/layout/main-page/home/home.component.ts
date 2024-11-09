import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatCard, MatCardContent} from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    MatLabel,
    MatFormField,
    MatCardContent,
    MatCard
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  welcomeMessage: string | undefined;
  userName: string | undefined;

}
