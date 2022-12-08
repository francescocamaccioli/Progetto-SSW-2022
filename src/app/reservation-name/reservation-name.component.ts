import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reservation-name',
  templateUrl: './reservation-name.component.html',
})
export class ReservationNameComponent implements OnInit {
  @Input() insertedKey: string;
  @Output() insertedNameEmitter = new EventEmitter<any>();
  insertedName: string;

  updateName(name: string) {
    if (name != '') {
      this.insertedName = name;
      this.insertedNameEmitter.emit(this.insertedName);
    }
  }
  constructor() {}
  ngOnInit() {}
}
