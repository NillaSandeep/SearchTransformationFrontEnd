import { Component } from '@angular/core';
import {Newlink} from './newlink';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-createlinks',
  templateUrl: './createlinks.component.html',
  styleUrls: ['./createlinks.component.css']
})
export class CreatelinksComponent {
  newlink = new Newlink('', '', '');
  submitted = false;
  constructor(private http: HttpClient) {}

  onSubmit(data) {
    this.http
        .post('http://localhost:8080/setOne', JSON.stringify(data),  {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
          })
        .subscribe();
    this.submitted = true;
    this.newlink = new Newlink('', '', '');
  }
}
