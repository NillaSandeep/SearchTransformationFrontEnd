import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-retrievelinks',
  templateUrl: './retrievelinks.component.html',
  styleUrls: ['./retrievelinks.component.css'],
})
export class RetrievelinksComponent {
   links;
     constructor(private http: HttpClient) {
        this.getData();
     }
     getData() {
       this.http
           .get('http://localhost:8080/getAll', {responseType: 'json'})
           .subscribe(links => {
             this.links = links;
           });
     }
}
