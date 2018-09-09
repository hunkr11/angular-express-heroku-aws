import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // getUsers() {
  //   return this._http.get("/api/users")
  //     .map(result => this.result = result.json().data);
  // }

  getUsers() {
    return this.http.get('https://raw.githubusercontent.com/LearnWebCode/json-example/master/animals-1.json').pipe(map(data => {})).subscribe(result => {
      console.log(result);
    });
  }
}
