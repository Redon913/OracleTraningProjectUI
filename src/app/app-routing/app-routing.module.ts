import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferComponent } from '../view/transfer/transfer.component';
import { HomeComponent } from '../view/home/home.component';
import { LoginComponent } from '../view/login/login.component';
import { ChangePasswordComponent } from '../view/change-password/change-password.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'fundsTransfer', component: TransferComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'changePassword', component: ChangePasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
