import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PrimeModule } from '../prime/prime.module';
import { TransferComponent } from './transfer/transfer.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    TransferComponent,
    LoginComponent
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
