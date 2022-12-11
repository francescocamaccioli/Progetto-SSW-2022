import { Component, Input, OnInit } from '@angular/core';
import { ShowdbService } from '../showdb.service';

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
  notification: string;
  fbm: boolean = false; //fast booking mode toggle
  tempSeat: { row: number; column: number; area: string; istaken: boolean };

  constructor(private dbservice: ShowdbService) {}

  pickSeat(row: number, column: number, area: string, istaken: boolean) {
    this.tempSeat = { row, column, area, istaken };
    if (istaken) {
      this.notification =
        'Seat ' + (row + 1) + ' ' + (column + 1) + ' is already taken.';
    } else {
      if (this.fbm) {
        this.confirmSeat();
        return;
      }
      this.notification =
        'Seat ' +
        (row + 1) +
        ' ' +
        (column + 1) +
        ' is free. Want to reserve it?';
    }
  }

  confirmSeat() {
    if (this.tempSeat.area === 'p') {
      this.parterre[this.tempSeat.row][this.tempSeat.column] =
        this.insertedName;
    }
    if (this.tempSeat.area === 'l') {
      this.loges[this.tempSeat.row][this.tempSeat.column] = this.insertedName;
    }
    let update = this.parterre.concat(this.loges);
    this.dbservice.setData(this.insertedKey, update).subscribe({
      next: (x: any) => {
        this.notification =
          'Row ' +
          +(this.tempSeat.row + 1) +
          ' Seat ' +
          (this.tempSeat.column + 1) +
          ': Reservation Confirmed for ' +
          this.insertedName +
          '!';
        this.tempSeat = undefined;
      },
      error: (err) =>
        console.error(`Observer got an error: ${JSON.stringify(err)}`),
    });
  }

  ngOnInit() {}
}
