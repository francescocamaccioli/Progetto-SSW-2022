import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  @Input() insertedKey: string;
  @Input() insertedName: string;
  @Input() parterre: any[];
  @Input() loges: any[];
  tempSeat: { row: number; column: number; area: string; istaken: boolean } =
    undefined;

  pickSeat(row: number, column: number, area: string, istaken: boolean) {
    this.tempSeat = { row, column, area, istaken };
  }

  constructor() {}

  ngOnInit() {}
}
