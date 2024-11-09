import { Component } from '@angular/core';
import { AccountService } from '../../../services/register-service/acount.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SuccessDialogComponent } from './success-dialog.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nombre_completo: string = '';
  ruc: string = '';
  email: string = '';
  dni: string = '';
  password: string = '';
  fecha_nacimiento: string = '';

  constructor(private accountService: AccountService, private dialog: MatDialog, private router: Router) {}

  onSubmit() {
    const accountData = {
      nombre_completo: this.nombre_completo,
      ruc: this.ruc,
      email: this.email,
      dni: this.dni,
      password: this.password,
      fecha_nacimiento: this.fecha_nacimiento
    };
    this.accountService.createAccount(accountData).subscribe(response => {
      this.openSuccessDialog();
    }, error => {
      console.error('Error creating account', error);
    });
  }

  openSuccessDialog(): void {
    const dialogRef = this.dialog.open(SuccessDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
