import { Component, EventEmitter, Output, VERSION } from '@angular/core';
import { ShowdbService } from './showdb.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // testing key = 782dc825
  insertedKey: string;
  insertedName: string;
  createdKey: string;
  parterre: any[] = [];
  loges: any[] = [];
  clickedCreate = false;

  constructor(private dbservice: ShowdbService) {}

  updateKey(key: string) {
    var errordiv = document.getElementById('errorDiv');
    this.dbservice.getData(key).subscribe({
      next: (x: any) => {
        errordiv.innerHTML = '';
        this.insertedKey = key;
        const theater = JSON.parse(x);
        this.parterre = theater.slice(0, 7);
        this.loges = theater.slice(7);
      },
      error: (err) => {
        errordiv.innerHTML = '';
        errordiv.innerHTML += '<strong>Invalid Key!</strong>';
      },
    });
  }

  createKey() {
    var newK = document.getElementById('newKey');
    this.dbservice.newData().subscribe({
      next: (newKey: any) => {
        const key = newKey;
        const theater = new Array(7)
          .fill('')
          .map(() => Array(10).fill('x'))
          .concat(new Array(4).fill('').map(() => Array(6).fill('x')));
        this.dbservice.setData(newKey, theater).subscribe({
          next: (newKey: any) => {
            this.clickedCreate = true;
            this.createdKey = key;
            newK.innerHTML = '';
            newK.innerHTML += 'New Show Key: <strong>' + key + '</strong>';
          },
          error: (err) => {
            console.error(`setData Observer error`);
          },
        });
      },
      error: (err) => {
        console.error(`newData Observer error`);
      },
    });
  }
}
