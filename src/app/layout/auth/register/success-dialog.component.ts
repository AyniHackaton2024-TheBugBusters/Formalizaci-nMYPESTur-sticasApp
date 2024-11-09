import { Component } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-success-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton
  ],
  template: `
    <h1 mat-dialog-title>Cuenta Creada</h1>
    <div mat-dialog-content>
      <p>Su cuenta ha sido creada exitosamente.</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onClose()">OK</button>
    </div>
  `
})
export class SuccessDialogComponent {
  constructor(private dialogRef: MatDialogRef<SuccessDialogComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
