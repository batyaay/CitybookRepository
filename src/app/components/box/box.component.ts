import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cb-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent implements OnInit {
  @Input() header: string;
  @Input() imgHeaderSvg: string;
  @Input() notShadowMobile = false;
  @Input() permissionMobile = false;
  @Output() cbOnHeaderClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onHeaderClick(ev) {
    this.cbOnHeaderClicked.emit(ev);
  }

}
