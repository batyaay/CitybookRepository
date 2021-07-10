import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cb-dashboard-layout',
  template: `
    <div>
      <cb-side-menu></cb-side-menu>
      <div class="screen">
        <div class="container custom-container">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
   styles: [`
    .screen {
        padding-right: 13.5em;
       direction: rtl;
       font-family: Arial, Helvetica, sans-serif;
    }

    .container {
        background-color: #edf1f2;
    }

    .custom-container {
        max-width: 100%;
        padding: 1.5em;
    }

    @media (max-width: 767px) {
        .screen {
            padding-right: 0;
            padding-top: 9.8125em;
        }

        .custom-container {
            padding: 0;
        }
    }

  `]
})
export class DashboardLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
