import { Routes } from '@angular/router';
import { DashboardComponent } from './layout/main-page/dashboard/dashboard.component';
import { ProfileComponent } from './layout/main-page/profile/profile.component';
import { LoginComponent } from './layout/auth/login/login.component';
import { AuthGuard } from './core/guards/authguard.guard';
import { AuthLayoutComponent } from './pages/auth-layout/auth-layout.component';
import { RegisterComponent } from './layout/auth/register/register.component';
import { MainPageLayoutComponent } from './pages/main-page-layout/main-page-layout.component';
import {HomeComponent} from './layout/main-page/home/home.component';
import {ResourcesComponent} from './layout/main-page/resources/resources.component';
import {FormalizationComponent} from './layout/main-page/formalization/formalization.component';
import {SupportComponent} from './layout/main-page/support/support.component';
import {OpportunitiesComponent} from './layout/main-page/opportunities/opportunities.component';
import {ProcedureComponent} from './components/main-page/formalization/procedure/procedure.component';
import {ProcedureFormsComponent} from './components/main-page/formalization/procedure-forms/procedure-forms.component';
import {CreateServiceComponent} from './layout/main-page/create-service/create-service.component';

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
      { path: 'formalization/procedure', component: ProcedureComponent },
      { path: 'formalization/procedure-forms', component: ProcedureFormsComponent },
      { path: 'resources', component: ResourcesComponent },
      { path: 'opportunities', component: OpportunitiesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'service', component: CreateServiceComponent },
      { path: 'support', component: SupportComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

export { appRoutes as routes };
