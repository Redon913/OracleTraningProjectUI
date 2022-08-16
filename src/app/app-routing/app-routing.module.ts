import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from '../view/balance/balance.component';
import { HomeComponent } from '../view/home/home.component';
import { UserDetailComponent } from '../view/user-detail/user-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'accountBalance', component: BalanceComponent},
  {path: 'accountDetails', component: UserDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
