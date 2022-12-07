import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ShowdbService {
  private kvaasURL: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/';

  constructor(private http: HttpClient) {}

  public getData(key: string): Observable<string> {
    return this.http.get<string>(this.kvaasURL + 'get?key=' + key);
  }

  public setData(key: string, value: any[]): Observable<string> {
    return this.http.post<string>(this.kvaasURL + 'set?key=' + key, value);
  }

  public newData(): Observable<string> {
    return this.http.get<string>(this.kvaasURL + 'new?secret=ssw2022');
  }
}
