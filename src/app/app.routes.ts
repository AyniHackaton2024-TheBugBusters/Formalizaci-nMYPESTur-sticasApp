import { Routes } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SettingsComponent} from './components/settings/settings.component';
import {ProfileComponent} from './components/profile/profile.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './core/guards/authguard.guard';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]  },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
];
