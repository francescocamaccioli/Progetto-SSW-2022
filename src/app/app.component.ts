import { Component, VERSION } from '@angular/core';
import { ShowdbService } from './showdb.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // 628c28c4
  insertedKey: string;
  createdKey: string;
  parterre: any[] = [];
  loges: any[] = [];
  clicked = false;

  constructor(private dbservice: ShowdbService) {}

  updateKey(key: string) {
    var div = document.getElementById('errorDiv');
    this.dbservice.getData(key).subscribe({
      next: (x: any) => {
        div.innerHTML = '';
        this.insertedKey = key;
        const theater = JSON.parse(x);
        this.parterre = theater.slice(0, 7);
        this.loges = theater.slice(7);
      },
      error: (err) => {
        div.innerHTML = '';
        div.innerHTML += 'Invalid Key!';
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
            this.clicked = true;
            this.createdKey = key;
            newK.innerHTML = '';
            newK.innerHTML += 'New Key: ' + key;
          },
          error: (err) => {
            console.error(`Observer error: ${JSON.stringify(err)}`);
          },
        });
      },
      error: (err) => {
        console.error(`Observer error: ${JSON.stringify(err)}`);
      },
    });
  }
}
