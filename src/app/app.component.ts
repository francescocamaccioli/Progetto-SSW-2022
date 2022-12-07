import { Component, VERSION } from '@angular/core';
import { ShowdbService } from './showdb.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // 7d12a638
  insertedKey: string;
  parterre: any[] = [];
  loges: any[] = [];

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
}
