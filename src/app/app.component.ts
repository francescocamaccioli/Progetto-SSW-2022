import { Component, VERSION } from '@angular/core';
import { ShowdbService } from './showdb.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  insertedKey: string = '';
  insertedName: string = '';
  parterre: any[] = [];
  loges: any[] = [];

  constructor(private dbservice: ShowdbService) {}

  updateKey(key: string) {
    this.dbservice.getData(key).subscribe({
      next: (x: any) => {
        const theater = JSON.parse(x);
        this.parterre = theater.slice(0, 7);
        this.loges = theater.slice(7);
        this.insertedKey = key;
      },
      error: (err) => alert('Invalid Show Key'),
    });
    
  }

  updateName(name: string){
    this.insertedName = name;
  }
  
}
