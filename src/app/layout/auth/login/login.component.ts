import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../../services/login-service/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      ruc: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { ruc, password } = this.loginForm.value;
      this.loginService.login(ruc, password).subscribe(response => {
        localStorage.setItem('userId', response.userId);
        localStorage.setItem('nombre_completo', response.nombre_completo);
        localStorage.setItem('email', response.email);
        localStorage.setItem('ruc', response.ruc);
        localStorage.setItem('dni', response.dni);
        this.router.navigate(['/dashboard']);
      }, error => {
        console.error('Error logging in', error);
      });
    }
  }
}
