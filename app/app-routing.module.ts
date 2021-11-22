import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard-component';
import { LoginComponent } from './loginManagement/login/login.component';
import { SignUpComponent } from './loginManagement/signup/signup.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
