import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reservation-name',
  templateUrl: './reservation-name.component.html',
})
export class ReservationNameComponent implements OnInit {
  @Input() insertedKey: string | undefined;
  insertedName: string;

  updateName(name: string) {
    this.insertedName = name;
  }
  constructor() {}
  ngOnInit() {}
}
