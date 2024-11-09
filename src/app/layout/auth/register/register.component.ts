import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthenticationApiService} from '../../../services/authentication-api.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private authApi: AuthenticationApiService,
    private snack: MatSnackBar,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      nombre_completo: ['', Validators.required],
      ruc: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dni: ['', Validators.required],
      clave_hash: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  signUp() {
    if (this.registerForm.valid) {
      const { nombre_completo, ruc, email, dni, clave_hash, fecha_nacimiento } = this.registerForm.value;
      this.authApi.signUp(nombre_completo, ruc, email, dni, clave_hash, fecha_nacimiento).subscribe(
        (response) => {
          console.log('Account creation successful', response);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.log(error);
          this.snack.open('Error al crear la cuenta, vuelva a intentar !!', 'Aceptar', {
            duration: 3000
          });
        }
      );
    }
  }
}
