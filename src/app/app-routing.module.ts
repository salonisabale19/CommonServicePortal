import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ApplicationformComponent } from './components/applicationform/applicationform.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SubmittedComponent } from './components/submitted/submitted.component';
import { UpdateformComponent } from './updateform/updateform.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'user',component:UserDashboardComponent},
  {path:'admin',component:AdminDashboardComponent},
  {path:'application-form',component:ApplicationformComponent},
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  {path:'profile',component:ProfileComponent},
  {path:'submitted',component:SubmittedComponent},
  {path:'update',component:UpdateformComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
