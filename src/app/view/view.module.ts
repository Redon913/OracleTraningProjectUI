import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PrimeModule } from '../prime/prime.module';
import { BalanceComponent } from './balance/balance.component';
import { UserDetailComponent } from './user-detail/user-detail.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BalanceComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    PrimeModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class ViewModule { }
