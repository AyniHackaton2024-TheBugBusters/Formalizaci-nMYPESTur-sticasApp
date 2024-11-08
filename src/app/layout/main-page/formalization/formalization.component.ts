import { Component } from '@angular/core';
import {
  NecesaryDocumentsComponent
} from '../../../components/main-page/formalization/necesary-documents/necesary-documents.component';
import {ProcedureComponent} from '../../../components/main-page/formalization/procedure/procedure.component';
import {
  ProcedureProgressComponent
} from '../../../components/main-page/formalization/procedure-progress/procedure-progress.component';
import {Tramite} from '../../../components/main-page/formalization/procedure/tramite.model';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-formalization',
  standalone: true,
  imports: [
    NecesaryDocumentsComponent,
    ProcedureComponent,
    ProcedureProgressComponent,
    NgIf
  ],
  templateUrl: './formalization.component.html',
  styleUrl: './formalization.component.css'
})
export class FormalizationComponent {
  tramites: Tramite[] = [];
}
