import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ba-alert',
  templateUrl: './ba-alert.component.html',
  styleUrls: ['./ba-alert.component.css']
})
export class BaAlertComponent implements OnInit {
  @Input() alertType : string;
  @Input() alertDismissible : boolean;  
  @Input() alertMessage : string;
  @Output() close = new EventEmitter();

  closed = false;
  
  constructor() {
  }
    ngOnInit() {
      //console.log(this.alertType);
      //console.log(this.alertMessage);
      //console.log(this.alertDismissible);
  }
  closeHandler() { this.close.emit(null); }
}