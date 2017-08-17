import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'environmental links directory';
  // private title;
  // constructor(private http: HttpClient) {
  //    this.getData();
  // }
  // getData() {
  //   this.http
  //       .get('https://searchlinks.mybluemix.net', {responseType: 'text'})
  //       .subscribe(data => {
  //         this.title = data;
  //       });
  // }
}
