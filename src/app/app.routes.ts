import { Routes } from '@angular/router';
import { DashboardComponent } from './components/main-page/dashboard/dashboard.component';
import { ProfileComponent } from './components/main-page/profile/profile.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './core/guards/authguard.guard';
import { AuthLayoutComponent } from './pages/auth-layout/auth-layout.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { MainPageLayoutComponent } from './pages/main-page-layout/main-page-layout.component';
import {HomeComponent} from './components/main-page/home/home.component';
import {ResourcesComponent} from './components/main-page/resources/resources.component';
import {FormalizationComponent} from './components/main-page/formalization/formalization.component';
import {SupportComponent} from './components/main-page/support/support.component';
import {OpportunitiesComponent} from './components/main-page/opportunities/opportunities.component';

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
      { path: 'formalization', component: FormalizationComponent },
      { path: 'resources', component: ResourcesComponent },
      { path: 'opportunities', component: OpportunitiesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'support', component: SupportComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

export { appRoutes as routes };
