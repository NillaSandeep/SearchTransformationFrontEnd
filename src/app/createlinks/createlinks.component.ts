import { Component } from '@angular/core';
import {Newlink} from './newlink';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {isNull} from "util";
@Component({
  selector: 'app-createlinks',
  templateUrl: './createlinks.component.html',
  styleUrls: ['./createlinks.component.css']
})
export class CreatelinksComponent {

    newlink = new Newlink('', '', '');
    namevalidator = false;
    submitted = false;

  constructor(private http: HttpClient) {}

  onSubmit(data) {
    if (data.name === null) {
      return this.namevalidator = true;
    }
    this.http
        .post('http://localhost:8080/setOne', JSON.stringify(data),  {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
          })
        .subscribe();
    this.submitted = true;
    this.newlink = new Newlink('', '', '');

  }
}
