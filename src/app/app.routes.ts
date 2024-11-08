import { Routes } from '@angular/router';
import { DashboardComponent } from './components/main-page/dashboard/dashboard.component';
import { SettingsComponent } from './components/main-page/settings/settings.component';
import { ProfileComponent } from './components/main-page/profile/profile.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './core/guards/authguard.guard';
import { AuthLayoutComponent } from './pages/auth-layout/auth-layout.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { MainPageLayoutComponent } from './pages/main-page-layout/main-page-layout.component';
import {HomeComponent} from './components/main-page/home/home.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: '',
    component: MainPageLayoutComponent,
    canActivate: [AuthGuard], // Protege las rutas del dashboard
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

export { appRoutes as routes };
