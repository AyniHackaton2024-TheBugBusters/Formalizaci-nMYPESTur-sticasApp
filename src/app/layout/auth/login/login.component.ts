import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from "@angular/router";
import {NgIf} from "@angular/common";
import {AuthenticationApiService} from '../../../services/authentication-api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
    ReactiveFormsModule,
    MatCardModule,
    NgIf,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authApi: AuthenticationApiService,
    private snack: MatSnackBar,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      ruc: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.invalid) {
      this.snack.open('Por favor, complete todos los campos requeridos.', 'Aceptar', {
        duration: 3000
      });
      return;
    }

    const { ruc, password } = this.loginForm.value;

    this.authApi.signIn(ruc, password).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error);
        this.snack.open('Error de inicio de sesión, vuelva a intentar !!', 'Aceptar', {
          duration: 3000
        });
      }
    );
  }

}
