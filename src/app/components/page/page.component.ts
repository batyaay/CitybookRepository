import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cb-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @Input() headerText = '';
  constructor() { }

  ngOnInit() {
  }

}
