import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  insertedKey: string = '';
  insertedName: string = '';

  updateKey(key: string) {
    this.insertedKey = key;
  }

  updateName(name: string){
    this.insertedName = name;
  }
  
}
