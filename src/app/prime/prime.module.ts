import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import {MenuModule} from 'primeng/menu';
import {DividerModule} from 'primeng/divider';
import { ChipModule } from 'primeng/chip';
import {BadgeModule} from 'primeng/badge';
import {DialogModule} from 'primeng/dialog';
import {SkeletonModule} from 'primeng/skeleton';
import { InputTextModule } from "primeng/inputtext";
import { AvatarModule } from "primeng/avatar";


@NgModule({
  declarations: [],
  exports: [
    SidebarModule,
    ButtonModule,
    MenuModule,
    DividerModule,
    ChipModule,
    BadgeModule,
    DialogModule,
    SkeletonModule,
    InputTextModule,
    AvatarModule
  ]
})
export class PrimeModule { }
