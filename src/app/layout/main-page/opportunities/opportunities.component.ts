import { Component } from '@angular/core';
import {oportunidades} from './Oportunidad.model';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-opportunities',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './opportunities.component.html',
  styleUrl: './opportunities.component.css'
})
export class OpportunitiesComponent {

  protected readonly oportunidades = oportunidades;
}
