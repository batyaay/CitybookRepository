import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cb-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuButtonComponent implements OnInit {

  @Input() routerTo?: any[];
  @Input() labelText?: string;
 
  public mouseIn = false;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseover')
  onMouseEnter() {
    this.mouseIn = true;
  }

  @HostListener('blur')
  @HostListener('mouseleave')
  onMouseLeave() {
    this.mouseIn = false;
  }

}
