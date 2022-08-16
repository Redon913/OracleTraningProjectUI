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
      label: 'Navigate',
      style: 'width: 280px;',
      items: [{
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home'
      },
      {
        label: 'Account Balance',
        icon: 'pi pi-money-bill',
        routerLink: '/accountBalance'
      },
      {
        label: 'Account Details',
        icon: 'pi pi-user',
        routerLink: '/accountDetails'
      }
      ]
    }];
  }

  ngOnInit(): void {
  }

  showNotification(position: string){
    this.position = position;
    this.displayNotification = true;
  }

}
