import { Component } from '@angular/core';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {Tramite} from '../procedure/tramite.model';

@Component({
  selector: 'app-procedure-progress',
  standalone: true,
  imports: [
    MatProgressSpinner
  ],
  templateUrl: './procedure-progress.component.html',
  styleUrl: './procedure-progress.component.css'
})
export class ProcedureProgressComponent {
  progreso = 50; // Example: 50% complete
  estadoTramite = 'En proceso';
  tramites: Tramite[] = [];

  ngOnInit() {
    // Fetch progress data from server or calculate based on completed steps
  }


}
