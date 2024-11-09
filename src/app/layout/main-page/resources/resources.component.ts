import { Component } from '@angular/core';
import {recursos} from './resource.model';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent {

  protected readonly recursos = recursos;
}
