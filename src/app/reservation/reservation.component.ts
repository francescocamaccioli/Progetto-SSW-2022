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
  tempSeat: { row: number; column: number; area: string; istaken: boolean };

  constructor(private dbservice: ShowdbService) {}

  pickSeat(row: number, column: number, area: string, istaken: boolean) {
    if (istaken) {
      this.notification =
        'Seat ' + (column + 1) + ' ' + (row + 1) + ' is already occupied';
    } else {
      this.tempSeat = { row, column, area, istaken };
      this.notification =
        'You picked seat ' +
        (column + 1) +
        ' ' +
        (row + 1) +
        '. Want to confirm it?';
    }
  }

  confirmSeat() {
    if (this.tempSeat.area === 'p') {
      this.parterre[this.tempSeat.column][this.tempSeat.row] =
        this.insertedName;
    }
    if (this.tempSeat.area === 'l') {
      this.loges[this.tempSeat.column][this.tempSeat.row] = this.insertedName;
    }
    let update = this.parterre.concat(this.loges);
    this.dbservice.setData(this.insertedKey, update).subscribe({
      next: (x: any) => {
        this.notification = 'Seat reservation Confirmed';
        this.tempSeat = undefined;
      },
      error: (err) =>
        console.error(`Observer got an error: ${JSON.stringify(err)}`),
    });
  }

  ngOnInit() {}
}
