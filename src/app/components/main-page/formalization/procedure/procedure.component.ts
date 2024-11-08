import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {Tramite} from './tramite.model';

@Component({
  selector: 'app-procedure',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './procedure.component.html',
  styleUrl: './procedure.component.css'
})

export class ProcedureComponent {
  tramites: Tramite[] = [];
  constructor(private router: Router) {}

  hasOngoingProcedures(): boolean {
    return this.tramites.length > 0;
  }

  startNewProcedure() {
    this.router.navigate(['/formalization/procedure-forms']);
  }
}
