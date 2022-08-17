import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  displaySideBar!: boolean;
  items!: MenuItem[];
  displayNotification!: boolean;
  position!: string;

  constructor() {
    this.items = [{
      label: 'Account',
      items: [{
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home'
      },
      {
        label: 'Transfer Funds',
        icon: 'pi pi-wallet',
        routerLink: '/fundsTransfer'
      },
      {
        label: 'Change Password',
        icon: 'pi pi-user',
        routerLink: '/changePassword'
      },
      {
        label: 'Login',
        icon: 'pi pi-sign-in',
        routerLink: '/auth/login'
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        routerLink: '/auth/logout'
      }
      ]
    },
    {
      label: 'Bank Details',
      items: [
      {
        label: 'Investor',
        icon: 'pi pi-money-bill',
        routerLink: '/investors'
      },
      {
        label: 'About Us',
        icon: 'pi pi-info-circle',
        routerLink: '/about'
      },
      {
        label: 'Contact Us',
        icon: 'pi pi-phone',
        routerLink: '/contact'
      }]
    }];
  }

  ngOnInit(): void {
  }

  showNotification(position: string){
    this.position = position;
    this.displayNotification = true;
  }

}
