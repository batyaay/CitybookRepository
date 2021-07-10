import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input, Output, OnChanges, EventEmitter, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Child } from '../../models/Child';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cb-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ maxHeight: '0px', overflow: 'hidden' }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({ maxHeight: '0px', overflow: 'hidden' }))
      ])
    ])
  ]
})
export class DialogModalComponent implements OnInit {
  
  @ViewChild('childForm') childForm: NgForm;
  @Input() closable = true;
  @Input() visible: boolean;
  @Input() circleBackgroundColor = '#7fde7f';
  @Input() modalIcon = '';
  @Output() cbOnClose: EventEmitter<boolean> = new EventEmitter<any>();
  @Output() cbOnCancel: EventEmitter<any> = new EventEmitter<any>();
  @Input() cancelBtnText = 'ביטול';
  @Output() cbOnConfirm: EventEmitter<any> = new EventEmitter<any>();
  @Input() confirmBtnText = 'אישור';
  private _inputData: any;
  private _mainMessage = '';
  private _smallMessage = '';
  private _dialogContent = '';
  public Child = new Child();

  set inputData(data) {
    this._inputData = data;
  }

  set mainMessage(message) {
    this._mainMessage = message;
  }

  get mainMessage() {
    return this._mainMessage;
  }

  set smallMessage(message) {
    this._smallMessage = message;
  }

  get smallMessage() {
    return this._smallMessage;
  }

  set dialogContent(content) {
    this._dialogContent = content;
  }

  get dialogContent() {
    return this._dialogContent;
  }
  constructor(private eRef: ElementRef) { }

  ngOnInit() {
    
  }

  // @HostListener('document:keydown.escape', ['$event'])
  @HostListener('keyup.escape', ['$event'])
  onEscapeDownHandler(ev: KeyboardEvent) {
    if (this.eRef.nativeElement.contains(ev.target)) {
      ev.stopPropagation();
      ev.preventDefault();
      this.onCancel();
    }
  }

  onClose() {
    this.cbOnClose.emit(this._inputData);
    this.Child = new Child();
    this.visible = false;
  }

  onCancel() {
    this.cbOnCancel.emit(this._inputData);
    this.Child = new Child();
    this.visible = false;
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      let childAdded = new Child();
    childAdded.Name = this.Child.Name;
    childAdded.Tz = this.Child.Tz;
    childAdded.Birthdate = this.Child.Birthdate;
    this.Child = new Child();
      this.cbOnConfirm.emit(childAdded);
      
      this.visible = false;
    }
    
  }

  

}
