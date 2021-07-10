import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cb-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideMenuComponent implements OnInit {

  public menuItemList = [{
      labelText: 'ברוכים הבאים',
      routerTo: ['/citybook/hello']
    }, {
      labelText: 'רישום משתמש',
      routerTo: ['/citybook/user']
    }
  ];

  constructor(private eRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])

  ngOnInit() {   

  }

}

