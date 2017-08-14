import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  //title = 'environmental based application search';
  private title;
  constructor(private http: HttpClient) {
     this.getData();
  }
  getData() {
    this.http
        .get('http://localhost:8080', {responseType: 'text'})
        .subscribe(data => {
          this.title = data;
        });
  }

}
