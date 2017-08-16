import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './retrievedata.component.html'
})
export class RetrieveDataComponent{
  private links;
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
